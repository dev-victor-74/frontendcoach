import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { paystack } from "@/app/utils/paystack";
import { NextResponse } from "next/server"


export const POST=async(req)=>{
    try {
        const currrentUser = await getCurrentUser();
        const body = await req.json();
        const planCode = process.env.PLAN_CODE

        if(!currrentUser){
            return new NextResponse("unauthenticated",{status:401});
        }

        const transaction = await paystack.transaction.initialize({
            email: body.email,
            amount: 450000,
            plan:planCode,
            channels:["card"],
            callback_url:"http://localhost:3000/dashboard",
            metadata:{
                userId:currrentUser.id,
            }
        });

        if(!transaction) return new NextResponse("failed to contact paystack");

        return NextResponse.json(transaction);
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}