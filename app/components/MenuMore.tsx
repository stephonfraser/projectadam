import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faUser, faBell, faMessage } from '@fortawesome/free-solid-svg-icons'

import React from 'react'

interface MenuMoreProps {
  moreType: String;
}

const MenuMore:React.FC<MenuMoreProps> = ({moreType}) => {
  return (
    <>
      { moreType === "more" &&
        <div className='menuItem flex items-center px-[26px] py-[10px] bg-[#F6F87F] spline-sans-regular rounded-2xl text-lg hover:cursor-pointer hover:bg-[#D0D368]'>
          <FontAwesomeIcon icon={faAngleDown} className='w-[15px] h-[15px]'/>
        </div>
      }
      { moreType === "profile" &&
        <div className='menuItem flex items-center px-[26px] py-[10px] bg-[#F6F87F] spline-sans-regular rounded-2xl text-lg hover:cursor-pointer hover:bg-[#D0D368]'>
          <FontAwesomeIcon icon={faUser} className='w-[15px] h-[15px]'/>
        </div>
      }
      { moreType === "notification" &&
        <div className='menuItem flex items-center px-[26px] py-[10px] bg-[#F6F87F] spline-sans-regular rounded-2xl text-lg hover:cursor-pointer hover:bg-[#D0D368]'>
          <FontAwesomeIcon icon={faBell} className='w-[15px] h-[15px]'/>
        </div>
      }
      { moreType === "message" &&
        <div className='menuItem flex items-center px-[26px] py-[10px] bg-[#F6F87F] spline-sans-regular rounded-2xl text-lg hover:cursor-pointer hover:bg-[#D0D368]'>
          <FontAwesomeIcon icon={faMessage} className='w-[15px] h-[15px]'/>
        </div>
      }
    </>
  )
}

export default MenuMore