import { getCurrentUser } from "@/app/utils/actions/get-current-user"
import prismaDb from "@/app/utils/db";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req)=>{
    try {
      const body = await req.json() 
   
    
      const currentUser = await getCurrentUser();

    //   if(!currentUser?.role === UserRole.ADMIN){
    //     return new NextResponse("you cannot add a challenge", {status: 404})
    //   }

      const challenge = await prismaDb.challenge.create({
        data:{
            ...body
        }
      });
      return NextResponse.json(challenge,{status:201});
    } catch (error) {
        console.log(error)
        return new NextResponse(error, {status:500})
    }
}