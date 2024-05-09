import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuItems from './MenuItems'
import MenuMore from './MenuMore'
import MenuProfile from './MenuProfile'

const Navbar = () => {
  return (
    <nav className='flex navbar p-8 items-center w-full truncate'> 
      <div className='logoname flex items-center space-x-4'>
        <Link href={"/dashboard"}>
          <Image src="/images/logo.png" alt="logo" width={50} height={50} style={{objectFit: "contain"}}	/>
        </Link>
        <div className='vt323-regular text-[30px] uppercase'>#PROJECTADAM</div>
      </div>
      <div className='menuItems ml-5 flex space-x-4 w-full justify-between items-center'>
        <div className="itemsSection flex space-x-4 w-auto">
          <MenuItems menuName='Dashboard' status='active'/>
          <MenuItems menuName='Inventory' status='inactive'/>
          <MenuItems menuName='Sales' status='inactive'/>
          <MenuItems menuName='Customers' status='inactive'/>
          <MenuItems menuName='Receipts' status='inactive'/>
          <MenuMore moreType='more'/>
        </div>
        <div className="profileSection flex space-x-4 justify-self-end ml-2.5 justify-between">
          <MenuMore moreType='message'/>
          <MenuMore moreType='notification'/>
          {/* <MenuMore moreType='profile'/> */}
          <MenuProfile />
        </div>
      </div>
      <div className='hidden'>
        0
      </div>
    </nav>
  )
}

export default Navbar