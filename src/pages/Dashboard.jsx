import React from 'react'

import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'



const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      {/* Right side content */}
      <div className="w-full overflow-hidden p-5">
        <Topbar />
        <h1>Dashboard Home</h1>
      </div>
    </div>
  )
}

export default Dashboard