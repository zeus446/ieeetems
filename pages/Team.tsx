'use client'

import { useState, useEffect } from 'react'
import { TEAM_MEMBERS } from '@/data/team'

export default function Team() {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)

  /* ================= SCROLL LOCK + ESC CLOSE ================= */
  useEffect(() => {
    if (activeDepartment) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDepartment(null)
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [activeDepartment])

  const coreMembers = TEAM_MEMBERS.filter(
    member => member.department === 'core'
  )

  const leads = TEAM_MEMBERS.filter(
    member =>
      member.department !== 'core' &&
      member.isCoHead === false
  )

  const getCoLeads = (department: string) =>
    TEAM_MEMBERS.filter(
      member =>
        member.department === department &&
        member.isCoHead === true
    )

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">

      {/* ================= CORE ================= */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Core Team
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {coreMembers.map(member => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-xl p-6 text-center transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-bold text-blue-600">
              {member.name}
            </h3>
            <p className="text-gray-700 font-medium">
              {member.role}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {member.bio}
            </p>
          </div>
        ))}
      </div>

      {/* ================= DOMAIN LEADS ================= */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Domain Leads
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {leads.map(lead => (
          <div
            key={lead.id}
            onClick={() => setActiveDepartment(lead.department!)}
            className="bg-white rounded-2xl shadow-xl p-6 cursor-pointer transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={lead.image}
              alt={lead.name}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-bold text-purple-600">
              {lead.name}
            </h3>
            <p className="text-gray-700 font-medium">
              {lead.role}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              {lead.bio}
            </p>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {activeDepartment && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setActiveDepartment(null)}  // click outside closes
        >
          <div
            className="bg-white rounded-3xl p-6 md:p-10 max-w-5xl w-full mx-4 md:mx-6 relative transform transition-all duration-300 scale-100 animate-in fade-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveDepartment(null)}
              className="absolute top-4 right-4 text-xl md:text-2xl font-bold bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-md hover:bg-gray-200 transition"
            >
              ✕
            </button>

            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">
              Co-Leads
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {getCoLeads(activeDepartment).map(co => (
                <div key={co.id} className="text-center">
                  <img
                    src={co.image}
                    alt={co.name}
                    className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <h4 className="mt-4 text-lg md:text-xl font-semibold">
                    {co.name}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    {co.role}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-2">
                    {co.bio}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}