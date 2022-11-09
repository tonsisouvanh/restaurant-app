import React from 'react'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'
import UpdateFoodForm from './UpdateFoodForm'

const SingleFood = () => {
  return (
    <div className="flex w-full">
    <Sidebar />
    {/* Right side content */}
    <div className="w-full overflow-hidden p-5">
      <Topbar />
      <UpdateFoodForm/>
    </div>
  </div>
  )
}

export default SingleFood