import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server"

export const POST =async(req)=>{
    try {
        const body = await req.json();

        const currentUser = await getCurrentUser();

        const savedChallenge = await prismaDb.savedChallenge.create({
            data:{
                userId:currentUser?.id,
                challengeId: body.challengeId,
                html:body.html,
                css:body.css,
                js:body.js,
                name:body.name
            }
        });
        return NextResponse.json(savedChallenge,{status:201});
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500});
    }
}


export const GET =async(req)=>{
    try {
        const currentUser = await getCurrentUser();

        const savedChallenges = await prismaDb.savedChallenge.findMany({
            where:{
                userId:currentUser.id
            }
        });
        if(!savedChallenges) return new NextResponse("can't find saved projects",{status:404});
        return NextResponse.json(savedChallenges,{status:201});
    } catch (error) {
        return new NextResponse(JSON.stringify(error),{status:500});
    }
}