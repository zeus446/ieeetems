'use client'

import { useState } from 'react'
import { TEAM_MEMBERS } from '@/data/team'

export default function Team() {
  const [openDepartment, setOpenDepartment] = useState<string | null>(null)

  // Core Members
  const coreMembers = TEAM_MEMBERS.filter(
    member => member.department === 'core'
  )

  // Domain Leads (not co-leads and not core)
  const leads = TEAM_MEMBERS.filter(
    member =>
      member.department !== 'core' &&
      member.isCoHead === false
  )

  // Get Co-Leads for a department
  const getCoLeads = (department: string) =>
    TEAM_MEMBERS.filter(
      member =>
        member.department === department &&
        member.isCoHead === true
    )

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">

      {/* ================= CORE TEAM ================= */}
      <h2 className="text-3xl font-bold mb-8 text-center">
        Core Team
      </h2>

      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {coreMembers.map(member => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover rounded-xl"
            />
            <h3 className="mt-4 text-xl font-semibold">
              {member.name}
            </h3>
            <p className="text-gray-600">
              {member.role}
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
          <div key={lead.id}>

            {/* Lead Card */}
            <div
              onClick={() =>
                setOpenDepartment(
                  openDepartment === lead.department
                    ? null
                    : lead.department!
                )
              }
              className="bg-white rounded-2xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={lead.image}
                alt={lead.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="mt-4 text-xl font-semibold">
                {lead.name}
              </h3>
              <p className="text-gray-600">
                {lead.role}
              </p>
            </div>

            {/* Co-Leads */}
            {openDepartment === lead.department && (
              <div className="mt-6 grid gap-4">
                {getCoLeads(lead.department!).map(co => (
                  <div
                    key={co.id}
                    className="bg-gray-100 rounded-xl p-4"
                  >
                    <img
                      src={co.image}
                      alt={co.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <h4 className="mt-3 font-medium">
                      {co.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {co.role}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

    </div>
  )
}