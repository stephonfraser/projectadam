import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const MenuProfile = () => {
  return (
    <div className='menuItem flex items-center px-[26px] py-[10px] bg-[#F6F87F] spline-sans-regular rounded-2xl hover:cursor-pointer hover:bg-[#D0D368]'>
        <FontAwesomeIcon icon={faUser} className='w-[15px] h-[15px]'/>
        <div className="profileInfo ml-2">
            <div className="userName text-[12px]">
                Stephon Fraser
            </div>
            <div className="userType text-[10px] text-gray-800">
                Adminstrator
            </div>
        </div>
    </div>
  )
}

export default MenuProfile