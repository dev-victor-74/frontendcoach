"use client"

import { MdDataSaverOff, MdPayments } from "react-icons/md";

import clsx from "clsx";

import { usePathname } from "next/navigation";
import UpgradeBtn from "./dashboard-components/upgrade-btn";
import { UserPlan } from "@prisma/client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { format } from "date-fns";

const ProBox = ({credit}) => {

    const[loading, setLoading] = useState(false);
    const[date, setDate] = useState(null);
    const pathName  = usePathname();
    const session = useSession()
    const email = session?.data?.user?.email

    const nextPaymentDate = date ? format(new Date(date && date),"PP") : null

    const subLink=async(code)=>{
          try {
            const res = await fetch(`https://api.paystack.co/subscription/${code}/manage/link`, {
            method:'GET',
            headers: {
              Authorization:`Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET}`,
              'Content-Type': 'application/json'
            },
           
          });
          const response = await res.json()
          if(response?.data.link){
            window.location.href = response?.data?.link
          }
          } catch (error) {
            toast.error("something went wrong, please try again");
          }
         
    }

    const getUserSubcription=async()=>{
      setLoading(true);
       try {
        const response = await fetch(`https://api.paystack.co/subscription?email=${email}`, {
          method:'GET',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if(data){
           await subLink(data?.data[0]?.subscription_code)
        }
       } catch (error) {
        
       }finally{
        setLoading(false)
      }
    }

    const getUserSub=async()=>{
      try {
        const response = await fetch(`https://api.paystack.co/subscription?email=${email}`, {
          method:'GET',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET}`,
            'Content-Type': 'application/json',
          },
        });
         const data = await response.json();
        setDate(data?.data[0]?.next_payment_date);
      } catch (error) {
        
      }
    }

    useEffect(()=>{
       email && getUserSub();

       return ()=> getUserSub();
    },[email])


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
                   
                    <div className="flex flex-col gap-2">
                       <p
                        className="text-md text-zinc-300 text-center md:text-start"
                       >You are currently on a <strong className="text-zinc-300 px-2 rounded-full py-[2px]" id="upgrade2">Pro</strong> plan </p>
                        <p
                        className="text-md text-zinc-300 text-center md:text-start"
                       >
                        Next payment date is {nextPaymentDate}                 
                       </p>
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
               <button onClick={getUserSubcription} className="rounded-md ring-2 w-max px-3 py-1 ring-purple-800 bg-blue-950 text-zinc-200 text-sm font-semibold">
               {loading?
                <MdDataSaverOff size={18} color="silver" className="animate-spin"/>:
                "Manage Subscription"
               }
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