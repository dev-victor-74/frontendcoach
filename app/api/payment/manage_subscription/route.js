import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { paystack } from "@/app/utils/paystack";
import { NextResponse } from "next/server"
import { headers } from "next/headers";


export const POST=async(req)=>{
    try {
        const currrentUser = await getCurrentUser();
        const body = await req.json();
        const auth = headers().get("authorization")

        //  if(!body.code) return new NextResponse("missing fields",{status:404});

        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }


        const response = await fetch(`https://api.paystack.co/subscription/${body.code}/manage/link`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: auth
            },
           
          });
          const data = await response.json();

        return NextResponse.json(data);
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}