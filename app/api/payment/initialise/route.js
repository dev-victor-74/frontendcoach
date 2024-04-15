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

         console.log(auth)

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
              plan: planCode, // Replace with the ID of your subscription plan
            }),
          });
          const data = await response.json();

        // const transaction = await paystack.transaction.initialize({
        //     email: body.email,
        //     amount: 350000,
        //     plan:planCode,
        //     channels:["card"],
        //     callback_url:"https://frontendcoach-j9es.vercel.app/dashboard",
        //     metadata:{
        //         userId:currrentUser.id,
        //     },
           
        // },
        // {
        //     headers:{
        //         Authorization:`Bearer ${process.env.PAYSTACK_SECRET}`
        //     }
        // }
        // );

        // if(!transaction) return new NextResponse("failed to contact paystack");

        return NextResponse.json(data);
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}