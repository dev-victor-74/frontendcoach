import prismaDb from "@/app/utils/db"
import { NextResponse } from "next/server";

export const GET = async(req)=>{
    try {
        const challenges = await prismaDb.challenge.findMany();
        if(challenges) return NextResponse.json(challenges)

        return new NextResponse("no challenges", {status:404});
    } catch (error) {
         return new NextResponse(error, {status:500})
    }
}