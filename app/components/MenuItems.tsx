import React from 'react'

interface MenuItemsProps {
    menuName: string;
    status: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({menuName, status}) => {
  return (
    <>
        {status === "active" &&
            <div className='menuItem items-center px-[26px] py-[10px] bg-[#D0D368] spline-sans-regular rounded-2xl text-base hover:cursor-pointer'>{menuName}</div>
        }
        {status === "inactive" &&
            <div className='menuItem items-center px-[26px] py-[10px] bg-[#F6F87F] spline-sans-regular rounded-2xl text-base hover:cursor-pointer hover:bg-[#D0D368]'>{menuName}</div>
        }
       
    </>
    
  )
}

export default MenuItems