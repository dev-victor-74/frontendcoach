"use client"

import AddChallengeForm from "@/components/admin/add-challenge-form";
import Loading from "@/components/status/loading";
import { useEffect, useState } from "react";

const AddChallengePage = () => {

  const[mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  })

  if(!mounted){
    return <Loading/>
  }
 

  return (
    <div className="w-full h-full bg-white px-3 md:px-4 py-1">
      <h1 className="font-bold text-[22px] text-black">Add a Challenge</h1>
      <section className="w-full h-full mt-[5px]  px-1 md:px-1 rounded-md py-3 mb-3">
          <AddChallengeForm/>
      </section>
    </div>
  )
}

export default AddChallengePage
