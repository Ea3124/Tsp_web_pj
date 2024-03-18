import Container from '@/components/Container'
import React from 'react'

const TeamMission = () => {
  return (
    <div className="min-h-screen h-full bg-white rounded-lg shadow-lg font-abel mx-auto" >
      <div className="flex flex-col items-center p-4">
        <button className=" ml-6 mr-6 mb-4 mt-14 px-14 bg-custom-orange text-3xl text-custom-font-gray p-2 rounded-2xl shadow-md">
          team mission
        </button>
        <div className=" p-4 bg-white rounded-lg mb-4 border border-black w-full h-60">
          {/* Content goes here */}
        </div>
        <div className="p-4 bg-white rounded-lg border border-black w-full h-96">
          {/* Content goes here */}
        </div>
      </div>
    </div>
  )
}

export default TeamMission