import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='navbar p-5'>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} style={{objectFit: "contain"}}	/>
    </nav>
  )
}

export default Navbar