'use client'

import { useState } from 'react'
import { TEAM_MEMBERS } from '@/data/team'

export default function Team() {
  const [openDomain, setOpenDomain] = useState<string | null>(null)

  const coreLeads = TEAM_MEMBERS.filter(member =>
    ['Chairman', 'Vice Chairman', 'Secretary'].includes(member.role)
  )

  const heads = TEAM_MEMBERS.filter(member => member.role === 'Head')

  const getCoHeads = (domain: string) =>
    TEAM_MEMBERS.filter(
      member => member.role === 'Co-Head' && member.domain === domain
    )

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Core Team
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {coreLeads.map(member => (
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

      <h2 className="text-3xl font-bold mb-8 text-center">
        Domain Heads
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {heads.map(head => (
          <div key={head.id}>

            <div
              onClick={() =>
                setOpenDomain(
                  openDomain === head.domain ? null : head.domain!
                )
              }
              className="bg-white rounded-2xl shadow-lg p-4 cursor-pointer hover:shadow-xl transition"
            >
              <img
                src={head.image}
                alt={head.name}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="mt-4 text-xl font-semibold">
                {head.name}
              </h3>
              <p className="text-gray-600">
                {head.domain} Head
              </p>
            </div>

            {openDomain === head.domain && (
              <div className="mt-6 space-y-4">
                {getCoHeads(head.domain!).map(co => (
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
                      Co-Head
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