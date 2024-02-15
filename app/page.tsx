import Image from "next/image";
import Link from "next/link";
import SignButton from "./components/buttons/SignButton";

export default function Home() {
  return (
    <main className="flex	">
      <div className="signin-body flex flex-row w-full">
        <div className='left-container p-10 bg-[#9D9703] h-screen w-2/6 flex justify-center'>
          <Image src="/images/logo.png" alt="logo" width={200} height={200} style={{objectFit: "contain"}}	/>
        </div>
        <div className='right-container p-10 bg-[#FFF7DB] h-screen w-4/6 flex flex-col'>
          <div className="container-details my-auto h-4/5 flex flex-col">
            <div className="vt323-regular text-[75px] uppercase leading-tight">Welcome Back</div>
            <div className="vt323-regular text-[75px] uppercase leading-tight">to <span className="text-[#856102]">Project Adam</span></div>
            <div className="subheading mt-2">Sign in to your account below</div>
            <form className="w-1/2">
              <input type="text" className="emailaddress px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Email Address"/>
              <input type="password" className="password px-[20px] py-[10px] w-full rounded-xl border border-2 mt-5 hover:border-[#9D9703] focus:outline-none focus:border-[#9D9703]" placeholder="Password"/>
            </form>
            <SignButton buttonText="Sign In"/>
            <div className="mt-5">Don't have an account? <Link href={"/signup"} className="text-[#856102] hover:underline">Sign up here!</Link></div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 right-0 p-8 uppercase vt323-regular">
        2024 @ salemcodes.dev
      </footer>
    </main>
  );
}
