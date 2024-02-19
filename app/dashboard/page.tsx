import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div className='dashboard-page h-screen'>
        <Navbar />
        <div className="container px-[40px] w-full h-full">
          Hello World
        </div>
    </div>
  )
}

export default page