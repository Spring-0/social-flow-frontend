import React from 'react'
import SidePanel from '../components/panels/SidePanel'
import Searchbar from '../components/Searchbar'
import { AiOutlineBell } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'
import OverviewChart from '../components/charts/OverviewChart'

export default function DashboardPage() {
  return (
    <div className='flex w-screen h-screen bg-purple-100'>
      <SidePanel />
      <div className='flex w-full bg-purple-100'>

        {/* Overview */}
        <div className='max-w-[30vw] w-full h-full bg-purple-200 '>

          <div className='w-full h-full p-6 overflow-y-auto text-sm space-y-7'>
            <h1 className='text-3xl bold'>Overview</h1>

            {/* Engagement */}
            <h1 className='text-2xl bold'>Engagement</h1>

            <div className='border-b border-slate-400'>
              <h1 className='text-gray-500'>Total Engagement</h1>
              <h1 className='p-3 text-lg'>500</h1>
            </div>

            <div className='border-b border-slate-400'>
              <h1 className='text-gray-500'>Average Engagement</h1>
              <h1 className='p-3 text-lg'>200</h1>
            </div>

            <div className='border-b border-slate-400'>
              <h1 className='text-gray-500'>Top Post Engagement</h1>
              <h1 className='p-3 text-lg'>531</h1>
            </div>

            <div className='border-b border-slate-400'>
              <h1 className='text-gray-500'>Top Account Engagement</h1>
              <h1 className='p-3 text-lg'>5314</h1>
            </div>

            {/* Audience Growth */}
            <h1 className='text-2xl bold'>Audience Growth</h1>

            <div className='border-b border-slate-400'>
              <h1 className='text-gray-500'>Total Followers</h1>
              <h1 className='p-3 text-lg'>5314</h1>
            </div>

            <div className='border-b border-slate-400'>
              <h1 className='text-gray-500'>Follower Growth Rate</h1>
              <h1 className='p-3 text-lg'>5314</h1>
            </div>

          </div>

        </div>

        {/* main */}
        <div className='w-full h-full px-10 py-3'>

          <div className='flex flex-col w-full h-full space-y-5'>
            {/* Header */}
            <div className='flex justify-between'>
              <Searchbar />
              <div className='flex items-center'>
                <button className='w-auto h-auto p-2 text-purple-500 bg-white rounded-full'><AiOutlineBell size={20} /></button>
                <h1 className='ml-4 font-bold text-purple-500'>Username</h1>
                <button class><RiArrowDropDownLine size={30} /> </button>

              </div>
            </div>


            {/* Chart */}
            <div className='w-full h-full py-4 pr-8 rounded-lg bg-purple-50'>
              <div className='flex flex-col items-center w-full h-full space-y-5'>
                <h1 className='text-2xl font-semibold'>This Month's Growth</h1>
                <OverviewChart />
              </div>
            </div>

            {/* Recent Actity */}
            <div class="recent-activity bg-white rounded-md shadow-md px-6 py-4 h-full w-full overflow-y-auto">
              <h2 class="text-lg font-medium text-gray-800 mb-2">Recent Activity</h2>
              <table class="table-auto w-full">
                <thead>
                  <tr>
                    <th class="px-4 py-2 text-left text-gray-600">Activity Type</th>
                    <th class="px-4 py-2 text-left text-gray-600">User</th>
                    <th class="px-4 py-2 text-left text-gray-600">Date</th>
                    <th class="px-4 py-2 text-left text-gray-600">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-gray-700">New Follower</td>
                    <td class="px-4 py-2 text-gray-700">@johndoe</td>
                    <td class="px-4 py-2 text-gray-700">May 1, 2023</td>
                    <td class="px-4 py-2 text-gray-700">Followed by @janedoe</td>
                  </tr>
                  <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-gray-700">New Follower</td>
                    <td class="px-4 py-2 text-gray-700">@johndoe</td>
                    <td class="px-4 py-2 text-gray-700">May 1, 2023</td>
                    <td class="px-4 py-2 text-gray-700">Followed by @janedoe</td>
                  </tr>
                  <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-gray-700">New Follower</td>
                    <td class="px-4 py-2 text-gray-700">@johndoe</td>
                    <td class="px-4 py-2 text-gray-700">May 1, 2023</td>
                    <td class="px-4 py-2 text-gray-700">Followed by @janedoe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>





        </div>



      </div>
    </div>
  )
}
