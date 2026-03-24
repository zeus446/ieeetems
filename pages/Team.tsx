'use client'

import { useState } from 'react'
import { TEAM_MEMBERS } from '@/data/team'

export default function Team() {
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null)

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

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {coreMembers.map(member => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition"
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

      <div className="grid md:grid-cols-3 gap-10">
        {leads.map(lead => (
          <div
            key={lead.id}
            onClick={() => setActiveDepartment(lead.department!)}
            className="bg-white rounded-2xl shadow-xl p-6 cursor-pointer hover:scale-105 transition"
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

      {/* ================= FULL SCREEN MODAL ================= */}
      {activeDepartment && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl p-10 max-w-5xl w-full mx-6 relative animate-fadeIn">

            {/* Close Button */}
            <button
              onClick={() => setActiveDepartment(null)}
              className="absolute top-4 right-6 text-2xl font-bold"
            >
              ✕
            </button>

            <h3 className="text-3xl font-bold mb-10 text-center">
              Co-Leads
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {getCoLeads(activeDepartment).map(co => (
                <div
                  key={co.id}
                  className="text-center"
                >
                  <img
                    src={co.image}
                    alt={co.name}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <h4 className="mt-4 text-xl font-semibold">
                    {co.name}
                  </h4>
                  <p className="text-gray-600">
                    {co.role}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
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