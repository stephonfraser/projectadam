'use client'
import React from 'react'
import SignButton from '../components/buttons/SignButton'
import { useState } from 'react'

const page = () => {
  const [pageLocation, setPageLocation] = useState(0);
  const [subheading, setSubheading] = useState("Complete your setup");

  const handleButtonClick = (pageNumber: number, pageSubHeading: string) => {
    setPageLocation(pageNumber);
    setSubheading(pageSubHeading);
  }

  return (
    <main className='flex'>
        <div className="signin-body flex flex-row w-full">
        <div className='left-container p-10 w-1/6'>
        </div>
        <div className='right-container p-10 w-5/6 flex flex-col'>
          <div className="container-details mt-auto mb-auto flex flex-col">
            <div className="vt323-regular text-[50px] uppercase leading-tight">Welcome to #PROJECTADAM</div>
            <div className="subheading mt-5">{subheading}</div>
                <form className="w-2/3 flex flex-col">
                { pageLocation == 0 &&
                  <>
                    <input type="text" className="displayName px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Display Name" alt="Display Name"/>
                    <input type="text" className="role px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Role" alt="Role"/>
                    <button className='vt323-regular px-[20px] py-[5px] bg-[#C9CC4D] rounded-md mt-5 text-[24px] w-1/6 hover:bg-[#a1a24f] hover:duration-100	' type='button' onClick={() => {handleButtonClick(1, "Setup your business and/or shop")}}>Next</button>
                  </>
                }
                { pageLocation == 1 &&
                  <>
                      <input type="text" className="businessName px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Business Name" alt="Business Name"/>
                      <input type="text" className="businessDomain px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Domain Name" alt="Domain Name"/>
                      <input type="text" className="businessAddress px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Business Address" alt="Business Address"/>
                      <input type="text" className="businessName px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Business Phone Number" alt="Business Phone Number"/>
                      <input type="text" className="noemployees px-[20px] py-[10px] w-1/2 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="No. of Employees" alt="Number of Employees"/>
                      <button className='vt323-regular px-[20px] py-[5px] bg-[#C9CC4D] rounded-md mt-5 text-[24px] w-1/6 hover:bg-[#a1a24f] hover:duration-100	' type='button' onClick={() => {handleButtonClick(2, "Invite your team")}}>Next</button>
                  </>
                }
                { pageLocation == 2 &&
                  <>
                      <div className='flex space-x-4'>
                        <input type="text" className="inviteeEmail px-[20px] py-[10px] w-3/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Email Address" alt="Email Addres"/>
                        <input type="text" className="inviteeRole px-[20px] py-[10px] w-1/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Role" alt="Role"/>
                      </div>
                      <div className='flex space-x-4'>
                        <input type="text" className="inviteeEmail px-[20px] py-[10px] w-3/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Email Address" alt="Email Addres"/>
                        <input type="text" className="inviteeRole px-[20px] py-[10px] w-1/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Role" alt="Role"/>
                      </div>
                      <div className='flex space-x-4'>
                        <input type="text" className="inviteeEmail px-[20px] py-[10px] w-3/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Email Address" alt="Email Addres"/>
                        <input type="text" className="inviteeRole px-[20px] py-[10px] w-1/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Role" alt="Role"/>
                      </div>
                      <div className='flex space-x-4'>
                        <input type="text" className="inviteeEmail px-[20px] py-[10px] w-3/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Email Address" alt="Email Addres"/>
                        <input type="text" className="inviteeRole px-[20px] py-[10px] w-1/4 rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Role" alt="Role"/>
                      </div>
                      <div className='text-[#5B5701] mt-5 ml-2 hover:cursor-pointer'>Add More +</div>
                      <button className='vt323-regular px-[20px] py-[5px] bg-[#C9CC4D] rounded-md mt-5 text-[24px] w-1/6 hover:bg-[#a1a24f] hover:duration-100	' type='button'>Finish</button>
                  </>
                }
                </form>
          </div>
        </div>
      </div>
        {/* <div className="heading uppercase vt323-regular">Welcome to #PROJECTADAM</div> */}
    </main>
  )
}

export default page