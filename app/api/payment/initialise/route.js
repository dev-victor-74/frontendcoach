import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { NextResponse } from "next/server"
import { headers } from "next/headers";



export const POST=async(req)=>{

    try {
        const currrentUser = await getCurrentUser();
        const planCode = process.env.PLAN_CODE
        const auth = headers().get("authorization");
        console.log(auth)


        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }
        const response = await fetch('https://api.paystack.co/transaction/initialize', {
             method:"POST",
             headers: {
              Authorization: auth,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email:currrentUser?.email,
              amount:350000,
              channels:["card"],
              callback_url:"https://frontendcoach-j9es.vercel.app/dashboard",
              plan: planCode,
            }),
          });
          const data = await response.json()

        return NextResponse.json(data);
        
    } catch (error) {
      console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}