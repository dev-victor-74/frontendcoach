import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import axios from "axios";
import { NextResponse } from "next/server"



export const POST=async(req)=>{

    try {
        const currrentUser = await getCurrentUser();
        const planCode = process.env.PLAN_CODE


        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }
       const res = await axios.get(`https://api.paystack.co/subscription?email=${currrentUser?.email}`, {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
            'Content-Type': 'application/json',
          },
        });

        const resd = res.data;
        if(resd?.data[0]?.subscription_code){
             return new NextResponse("already subscribed to this plan",{status:403})
          }

        const response = await axios.get('https://api.paystack.co/transaction/initialize', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`
            },
            body: JSON.stringify({
              email:currrentUser?.email,
              amount:350000,
              channels:["card"],
              callback_url:"https://frontendcoach-j9es.vercel.app/dashboard",
              plan: planCode,
            }),
          });
          const data = response.data

        return NextResponse.json(data);
        
    } catch (error) {
      console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}