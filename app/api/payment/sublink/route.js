import { getCurrentUser } from "@/app/utils/actions/get-current-user"
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    try {
        const currrentUser = await getCurrentUser();
        const body = await req.json();


        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }

        const resp = await fetch(`https://api.paystack.co/subscription?email=${body.email}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
            'Content-Type': 'application/json',
          },
        });
        const res = await resp.json();

        const response = await fetch(`https://api.paystack.co/subscription/${res?.data[0]?.subscription_code}/manage/link`, {

            method: 'GET',
            headers: {
              Authorization: `Bearer ${process.env.PAYSTACK_SECRET}`,
              'Content-Type': 'application/json'
            },
           
          });
          const data = await response.json();

          return NextResponse.json(data)
         
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}