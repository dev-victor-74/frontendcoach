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
        console.log(req.headers.authorization)


        const transaction = await paystack.transaction.initialize({
            email: body.email,
            amount: 350000,
            plan:planCode,
            channels:["card"],
            callback_url:"https://frontendcoach-j9es.vercel.app/dashboard",
            metadata:{
                userId:currrentUser.id,
            },
           
        },
        {
            headers:{
                Authorization:"Bearer sk_test_7eed1917a46eaadacdcf8eafc685b55a4acef42f"
            }
        }
        );

        if(!transaction) return new NextResponse("failed to contact paystack");

        return NextResponse.json(transaction);
        
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}