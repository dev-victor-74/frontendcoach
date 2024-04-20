import { getCurrentUser } from "@/app/utils/actions/get-current-user"
import { headers } from "next/headers";
import { NextResponse } from "next/server"

export const POST =async(req)=>{

    try {
        const currrentUser = getCurrentUser();
        const body = await req.json();
        const auth = headers().get("authorization")

         if(!currrentUser){
            return new NextResponse("unauthorised",{status:401});
         }
         const response = await fetch(`https://api.paystack.co/subscription?email=${body?.email}`, {
          method: 'GET',
          headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}