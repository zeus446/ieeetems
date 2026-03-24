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
    <div className="px-6 py-20 max-w-7xl mx-auto">

      {/* ================= CORE ================= */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14 tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
        Core Team
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-24">
        {coreMembers.map(member => (
          <div
            key={member.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Bezel-less Image */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-600 tracking-tight">
                {member.name}
              </h3>
              <p className="text-gray-700 font-medium mt-1">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= DOMAIN LEADS ================= */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-14 tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
        Domain Leads
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {leads.map(lead => (
          <div
            key={lead.id}
            onClick={() => setActiveDepartment(lead.department!)}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Bezel-less Image */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={lead.image}
                alt={lead.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-purple-600 tracking-tight">
                {lead.name}
              </h3>
              <p className="text-gray-700 font-medium mt-1">
                {lead.role}
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {lead.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

{/* ================= MODAL ================= */}
{activeDepartment && (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
    onClick={() => setActiveDepartment(null)}
  >
    <div
      className="bg-white rounded-3xl w-full max-w-6xl mx-4 md:mx-6 max-h-[90vh] flex flex-col overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >

      {/* ===== STICKY HEADER ===== */}
      <div className="sticky top-0 bg-white z-10 flex justify-between items-center px-6 py-5 border-b">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Co-Leads
        </h3>

        <button
          onClick={() => setActiveDepartment(null)}
          className="text-lg font-bold bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 transition"
        >
          ✕
        </button>
      </div>

      {/* ===== SCROLLABLE CONTENT ===== */}
      <div className="overflow-y-auto px-6 py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {getCoLeads(activeDepartment).map(co => (
            <div key={co.id} className="text-center">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={co.image}
                  alt={co.name}
                  className="w-full h-64 object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h4 className="mt-5 text-xl font-semibold tracking-tight">
                {co.name}
              </h4>
              <p className="text-gray-600 mt-1">
                {co.role}
              </p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {co.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
)}