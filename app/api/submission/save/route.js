import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const PATCH =async(req)=>{
    try {
        const {searchParams} = new URL(req.url);
        const  id = searchParams.get("id");

        const body = await req.json();
        
        const currentUser = await getCurrentUser();

        if(!currentUser) return new NextResponse("unauthorised",{status:403});

        if(!id) return new NextResponse("missing id",{status:404});

     
       const updatedChallenge = await prismaDb.savedChallenge.update({
        where:{
            userId:currentUser?.id,
            challengeId:id,
        },
        data:{
            ...body
        }
       })
       return NextResponse.json(updatedChallenge,{status:200});


    } catch (error) {
        console.log(error)
       return new NextResponse(JSON.stringify(error),{status:500}); 
    }
}