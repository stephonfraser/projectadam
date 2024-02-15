import React from 'react'

interface SignButtonProps {
  buttonText: string;
}

const SignButton: React.FC<SignButtonProps> = ({buttonText}) => {
  return (
    <button className='vt323-regular px-[20px] py-[5px] bg-[#C9CC4D] rounded-md mt-5 text-[24px] w-1/6 hover:bg-[#a1a24f] hover:duration-100	' type='button'>{buttonText}</button>
  )
}

export default SignButton