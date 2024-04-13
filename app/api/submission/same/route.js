import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server"

export const GET =async(req)=>{
    try {
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");

        const sameprojects  = await prismaDb.project.findMany({
            where:{
                challengeId:id
            },
            include:{
                user:{
                    include:{
                        profile:true,
                    }
                }
            }
        })
        if(!sameprojects) return new NextResponse("cant find similar projects",{status:404});

        return NextResponse.json(sameprojects,{status:200});
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error), {status:500});
    }
}