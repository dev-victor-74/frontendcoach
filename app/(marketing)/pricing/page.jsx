"use client"

import { useSession } from "next-auth/react"
import { useState } from "react"
import toast from "react-hot-toast"
import { BsFillLightningChargeFill } from "react-icons/bs"
import { MdCheck, MdDataSaverOff } from "react-icons/md"

const PricingPage = () => {

 const session = useSession();
 const [loading, setLoading] = useState(false);

 const email = session?.data?.user?.email


const getUserSub=async()=>{
   
  const response = await fetch(`https://api.paystack.co/subscription?email=${email}`,{
    method:'GET',
    headers:{
      Authorization:`Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET}`
    }
  })
   const data = await response.json();

   return data?.data[0]?.subscription_code;
}


  const onClick=async()=>{
     setLoading(true);
    try {
       const sub_code = await getUserSub();
      if(sub_code){
        return toast.error("You have already subscribed to this plan");
        // 'https://api.paystack.co/transaction/initialize',
      }
      const response = await fetch('api/payment/initialise', {
        method:"POST",
        headers: {
         Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET}`,
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         email:email,
       }),
     });
     const transaction = await response.json();
     
      if(transaction?.data?.authorization_url){

        window.location.href = transaction?.data?.authorization_url
      }
    } catch (error) {
      
      return toast.error("couldn't process request, check your internet connection and try again")
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="h-full w-full mt-14 mb-14">
       <div className="w-[90%] mx-auto h-full flex flex-col items-center gap-3 justify-center">
          <h1 className="text-4xl font-bold text-zinc-200 text-center">Become a Pro Developer Today!</h1>
          <p className="text-lg font-semibold text-zinc-300 text-center">Invest in yourself with Pro and Get job ready faster by improving your coding skills!</p>

          <div className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-4 justify-center mt-5">
          <div className="w-[300px] bg-[#0a081f] ring ring-blue-900 rounded-md flex flex-col px-4 py-5
            gap-3">
               <div className="w-full flex items-center justify-center flex-col gap-2">
                  <div id="upgrade2" className="w-[80px] rounded-full flex items-center justify-center mx-auto text-zinc-200 font-bold text-lg">
                  <span>Pro</span>
                  </div>
               </div>
               <div className="mx-auto flex items-center mb-2 gap-1">
                  <h1 className="font-semibold text-2xl text-zinc-200">NGN3500</h1> 
                  <span className="text-sm font-medium text-zinc-300">monthly</span>
               </div>
                
                <div className="flex items-center gap-4">
                   <MdCheck color="lime" size={18}/>
                    <span className="text-zinc-200 text-sm font-semibold">Access to all the challenges</span>
                </div>
                <div className="flex items-center gap-4">
                   <MdCheck color="lime" size={18}/>
                    <span className="text-zinc-200 text-sm font-semibold">Access to all the code tools</span>
                </div>
                <button disabled={loading} onClick={onClick} className="w-[90%] text-zinc-200 px-2 py-2 mx-auto rounded-full mt-5 flex items-center justify-center gap-4" id="upgrade2">
                {loading ?
                   <MdDataSaverOff size={18} color="silver" className="animate-spin"/>
                   :
                  <>
                    <BsFillLightningChargeFill color="lime" size={16}/>
                    <span className="font-semibold text-sm">upgrade Now</span>
                  </> }
                </button>
          </div>
          </div>
       </div>
    </div>
  )
}

export default PricingPage
