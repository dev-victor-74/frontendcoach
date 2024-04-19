import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { paystack } from "@/app/utils/paystack";
import { NextResponse } from "next/server"
import { headers } from "next/headers";


export const POST=async(req)=>{
    try {
        const currrentUser = await getCurrentUser();
        const body = await req.json();
        const planCode = process.env.PLAN_CODE
        // const auth = headers().get("authorization")


        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }

       const res = await fetch(`https://api.paystack.co/subscription?email=${body.email}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET}`,
            'Content-Type': 'application/json',
          },
        });

        const resd = await res.json();
        if(resd?.data[0]?.subscription_code){
             return new NextResponse("already subscribed to this plan",{status:403})
          }

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
            },
            body: JSON.stringify({
              email:body.email,
              amount:350000,
              channels:["card"],
              callback_url:"https://frontendcoach-j9es.vercel.app/dashboard",
              plan: planCode,
            }),
          });
          const data = await response.json();

        return NextResponse.json(data);
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}