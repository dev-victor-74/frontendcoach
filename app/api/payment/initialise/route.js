import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { paystack } from "@/app/utils/paystack";
import { NextResponse } from "next/server"
import { headers } from "next/headers";


export const POST=async(req)=>{
    try {
        const currrentUser = await getCurrentUser();
        const body = await req.json();
        const planCode = process.env.PLAN_CODE
        const auth = headers().get("authorization")


        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }

        const response = await fetch('https://api.paystack.co/transaction/initialize', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: auth
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