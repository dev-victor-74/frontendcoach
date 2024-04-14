import prismaDb from "@/app/utils/db";
import { getSession } from "@/app/utils/server-session";
import { NextResponse } from "next/server";

export const GET=async()=>{

    const session = await getSession();

    if(!session?.user?.email){
      return new NextResponse("unauthenticated", {status:401});
    }

    try {
        const user = await prismaDb.user.findUnique({
            where:{
                email:session.user.email,
            },
            include:{
                profile:true
            }

        });
        return NextResponse.json(user);
    } catch (error) {
      return new NextResponse(JSON.stringify(error), {status:500});
        
    }
}