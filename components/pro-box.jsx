"use client"

import { MdPayments } from "react-icons/md";

import clsx from "clsx";

import { usePathname } from "next/navigation";
import UpgradeBtn from "./dashboard-components/upgrade-btn";
import { UserPlan } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const ProBox = ({credit}) => {
    
    const[loading, setLoading] = useState();
    const pathName  = usePathname();
    const session = useSession()


    const manageSubscription=async()=>{
      setLoading(true);
      try {
        const subLink = await axios.post("/api/payment/manage_subscription",{
          code:credit?.subscriptionId
        },
         {
          headers:{
            Authorization: `Bearer sk_test_7eed1917a46eaadacdcf8eafc685b55a4acef42f`
          }
         }
       
         );
         console.log(subLink)
  
        // if(subLink?.data?.data?.authorization_url){
  
        //   window.location.href = transaction?.data?.data?.authorization_url
        // }
      } catch (error) {
        console.log(error)
        toast.error("couldn't process request, check your internet connection and try again")
      }finally{setLoading(false)}
    }

  return (
    <div className={clsx("w-full mt-6 mb-5", pathName === "/dashboard"? "mx-5" : "mx-[2px]")}>
        <div className="flex-col flex w-full md:h-[180px] bg-[#080f25] rounded-md px-6 py-4 md:flex-row items-center justify-between ">
            <div
             className=" flex flex-col w-full items-center md:items-start sm:justify-center md:justify-start">
               <div className="mb-2">
                 <MdPayments
                  size={28}
                  color=""
                  className="font-bold text-rose-200"
                 />
               </div>
               <div className=" flex flex-col gap-2 w-full mb-3">
                  {(credit?.plan === "Pro") ?
                  <>
                   
                    <div className="flex items-center">
                       <p
                        className="text-md text-zinc-300 text-center md:text-start"
                       >You are currently on a <strong className="text-zinc-300 px-2 rounded-full py-[2px]" id="upgrade2">Pro</strong> plan </p>
                    </div>
                    </>
                   : (credit?.plan === "Free") ?
                   <>
                   
                    <div className="flex items-center">
                       <p
                        className="text-md text-zinc-300 text-center md:text-start"
                       >
                       You are currently on a Free plan                     
                       </p>
                    </div>
                    </>
                     :
                     null
                  }
               </div>
            </div>

            <div className="flex items-center">
              {credit?.plan === UserPlan.Free?
                <UpgradeBtn/>
               :
               credit?.plan === UserPlan.Pro?
               <button onClick={manageSubscription} className="rounded-md ring-2 w-max px-3 py-1 ring-purple-800 bg-blue-950 text-zinc-200 text-sm font-semibold">
                   Manage Subscription
                </button>
                :
                null
               }
            </div>
        </div>
    </div>
  )
}

export default ProBox