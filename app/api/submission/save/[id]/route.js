import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
    try {
        const challenge = await prismaDb.savedChallenge.findFirst(
            {
                where:{
                    challengeId:params.id
                }
            }
        );
        if(!challenge) return new NextResponse("can't find saved challenge",{status:404});

        return NextResponse.json(challenge)
        
    } catch (error) {
        return new NextResponse(error)
    }
}
