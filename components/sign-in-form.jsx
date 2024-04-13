"use client"

import clsx from "clsx";
import Link from "next/link";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { signIn} from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const SignInForm = () => {

const [isLoading, setIsLoading] = useState(false)


const socialLogin=(type)=>{
    setIsLoading(true)

    signIn(type,{redirect: false})
    .then(callback=>{
      if(callback?.error){
        toast.error("invalid Credentials")
      }
      if(callback?.ok && !callback?.error){
        toast.success("Logged in!")
      }
    }).finally(()=>setIsLoading(false))
}
  return (
    <div className=" flex flex-col bg-[#0c0e22f5] rounded-sm px-[6px] md:px-4 py-2 mt-2 w-full pb-7">
    <h1 className="text-xl text-center font-semibold text-gray-200">Welcome Back!</h1>
    <div className="w-full bg-slate-800 py-1 mt-6 rounded-sm relative z-10
      flex items-center justify-center
    ">
      <span className="z-20 absolute bg-gray-950 px-2 rounded-sm
       font-semibold text-xs text-gray-400 m-auto"
       > Continue With</span>
    </div>

   <button 
      onClick={()=>socialLogin("github")}
      type="button" 
      className=
      {clsx("bg-blue-700 rounded-sm p-[8px] flex items-center justify-center gap-2 font-semibold text-sm text-zinc-300 mt-4",isLoading && "bg-blue-500")}
      >
    <BsGithub size={20} color="black" />  
     Github
  </button>
</div>
  )
}

export default SignInForm
