"use client"

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";


const RegisterPage = () => {

 const[name, setName] = useState("");
 const[email, setEmail] = useState("");
 const[password, setPassword] = useState("");

 console.log(name, email, password)



  return (
    <div className="h-screen w-full flex items-center justify-center overflow-y-scroll" id="lay">
    <div className="flex flex-col items-center w-[90%] md:w-[450px]">
       <div className="flex items-center gap-2">
           <Image 
            height={30}
            width={30}
            src="/dropbox.png"
            alt="logo"
            className="rounded-full"
           />
           <h1 className="text-2xl font-semibold text-zinc-200">Frontend Arena</h1>

       </div>
       <div className=" flex flex-col bg-[#0c0e22f5] rounded-sm px-[6px] md:px-4 py-2 mt-2 w-full">
            <h1 className="text-[16px] text-center font-semibold text-gray-200 mb-1">
                Create an account to get started</h1>
            <form className="w-full flex flex-col gap-2 mt-1">
                 
                 <div className="flex flex-col gap-1 ">
                     <span className="text-[14px] font-semibold text-[#e9e8e8]">Name</span>
                     <input type="text"
                     value={name}
                     onChange={(e)=>setName(e.target.value)}
                     className="p-[8px] rounded-sm outline-none focus-visible:ring-2
                     bg-slate-300 placeholder:text-zinc-700 placeholder:font-semibold
                         placeholder:text-sm"
                     placeholder="Enter your last name"
                     />
                 </div>
                 
                 <div className="flex flex-col gap-1 ">
                     <span className="text-[14px] font-semibold text-[#e9e8e8]">Email</span>
                     <input type="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                     className="p-[8px] rounded-sm outline-none focus-visible:ring-2
                     bg-slate-300 placeholder:text-zinc-700 placeholder:font-semibold
                         placeholder:text-sm"
                     placeholder="Enter your email"
                     />
                 </div>
                 
                 <div className="flex flex-col gap-1 ">
                     <span className="text-[14px] font-semibold text-[#e9e8e8]">Password</span>
                     <input type="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                     className="p-[8px] rounded-sm outline-none focus-visible:ring-2
                     bg-slate-300 placeholder:text-zinc-700 placeholder:font-semibold
                         placeholder:text-sm"
                     placeholder="Enter your password"
                     />
                 </div>
             
                 <button type="submit"
                     className={clsx("bg-blue-700 rounded-sm p-[8px] mt-2 font-semibold text-sm text-zinc-200")}
                     >Sign up
                 </button>
            </form>

            <div className="w-full bg-slate-800 py-1 mt-7 rounded-sm relative z-10
              flex items-center justify-center
            ">
              <span className="z-20 absolute bg-gray-950 px-2 rounded-sm
               font-semibold text-xs text-gray-400 m-auto"
               >Or Continue With</span>
            </div>

            <button type="button"
                 className=
                 {clsx("bg-blue-700 rounded-sm p-[8px] flex items-center justify-center gap-2 font-semibold text-sm text-zinc-300 mt-6")}
                 >
               <BsGoogle size={20}/>  
                Google    
           </button>

           <button type="button"
                 className=
                 {clsx("bg-blue-700 rounded-sm p-[8px] flex items-center justify-center gap-2 font-semibold text-sm text-zinc-300 mt-4")}
                 >
               <BsGithub size={20}/>  
                Github
           </button>

           <div className="w-full flex items-center justify-center mt-2">
               <div className="flex items-center gap-1 text-gray-300 text-sm tracking-tight">
                  By continuing you agree to our
                  <Link href='/terms' className="
                   text-gray-400 text-sm underline
                  ">Terms</Link>
                   and
                   <Link href='/privacy' className="
                   text-gray-400 text-sm underline
                  ">Privacy Policy</Link>
               </div>
           </div>
           <div className="w-full flex items-center justify-center mt-2">
               <div className="flex items-center gap-1 text-gray-300 text-sm tracking-tight">
                  Already have an account?
                  <Link href='/auth/sign-in' className="
                   text-gray-400 text-sm underline
                  ">Sign in</Link>
               </div>
           </div>
       </div>
    </div>
 </div>
  )
}

export default RegisterPage
