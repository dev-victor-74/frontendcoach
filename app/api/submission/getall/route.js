import prismaDb from "@/app/utils/db"
import { NextResponse } from "next/server";

export const GET = async(req)=>{
    try {
        const submissions = await prismaDb.project.findMany();
        if(submissions) return NextResponse.json(submissions)

        return new NextResponse("no submissions", {status:404});
    } catch (error) {
         return new NextResponse(error, {status:500})
    }
}