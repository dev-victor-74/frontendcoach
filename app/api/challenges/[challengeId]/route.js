import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
    try {
        const challenge = await prismaDb.challenge.findUnique(
            {
                where:{
                    id:params.challengeId,
                }
            }
        );
        if(!challenge) return new NextResponse("can't find challenge",{status:404});

        return NextResponse.json(challenge)
        
    } catch (error) {
        return new NextResponse(error)
    }
}