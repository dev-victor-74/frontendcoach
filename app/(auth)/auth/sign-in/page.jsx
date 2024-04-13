"use client"

import Image from "next/image";
import SignInForm from "@/components/sign-in-form";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const session = useSession()

  const router = useRouter()
  console.log(session)

useEffect(()=>{
    if(session.status === "authenticated"){
      return router.push("/dashboard")
    }
},[session])

  return (

    <div className="h-screen w-full flex items-center justify-center" id="lay">
       <div className="flex flex-col items-center w-[90%] md:w-[450px]">
          <SignInForm />
       </div>
    </div>
  )
}

export default LoginPage
