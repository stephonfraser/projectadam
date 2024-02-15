import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SignButton from '../components/buttons/SignButton';

const page = () => {
  return (
    <main className="flex	">
      <div className="signin-body flex flex-row w-full">
        <div className='left-container p-10 bg-[#9D9703] h-screen w-2/6 flex justify-center'>
          <Image src="/images/logo.png" alt="logo" width={200} height={200} style={{objectFit: "contain"}}	/>
        </div>
        <div className='right-container p-10 bg-[#FFF7DB] h-screen w-4/6 flex flex-col'>
          <div className="container-details mt-auto mb-auto flex flex-col">
            <div className="vt323-regular text-[75px] uppercase leading-tight">Create Your</div>
            <div className="vt323-regular text-[75px] uppercase leading-tight">Account</div>
            <div className="subheading mt-2">Enter your information below</div>
            <form className="w-1/2">
              <div className='flex space-x-4'>
                <input type="text" className="emailaddress px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="First Name"/>
                <input type="text" className="emailaddress px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Last Name"/>
              </div>
              <input type="text" className="emailaddress px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Email Address"/>
              <input type="password" className="password px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Password"/>
              <input type="password" className="password px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Confirm Password"/>
            </form>
            <SignButton buttonText='Create'/>
            <div className='mt-5'>Already have an account? <Link href={"/"} className="text-[#856102] hover:underline">Sign in here!</Link></div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 right-0 p-8 uppercase vt323-regular">
        2024 @ salemcodes.dev
      </footer>
    </main>
  )
}

export default page;