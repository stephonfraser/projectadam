'use client'
import React from 'react'
import SignButton from '../components/buttons/SignButton'
import { useState } from 'react'

const page = () => {
  const [pageLocation, setPageLocation] = useState(0);
  return (
    <main className='flex'>
        <div className="signin-body flex flex-row w-full">
        <div className='left-container p-10 w-1/6'>
        </div>
        <div className='right-container p-10 w-5/6 flex flex-col'>
          { pageLocation == 0 &&
            <>
              <div className="container-details mt-auto mb-auto flex flex-col">
                <div className="vt323-regular text-[50px] uppercase leading-tight">Welcome to #PROJECTADAM</div>
                <div className="subheading mt-5">Complete your setup</div>
                <form className="w-1/3">
                  {/* <div className='flex space-x-4'>
                    <input type="text" className="emailaddress px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703]" placeholder="First Name"/>
                    <input type="text" className="emailaddress px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703]" placeholder="Last Name"/>
                  </div> */}
                  <input type="text" className="displayName px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Display Name" alt="Display Name"/>
                  <input type="text" className="role px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Role" alt="Role"/>
                </form>
                <SignButton buttonText='Next'/>
              </div>
            </>
          }
        </div>
      </div>
        {/* <div className="heading uppercase vt323-regular">Welcome to #PROJECTADAM</div> */}
    </main>
  )
}

export default page