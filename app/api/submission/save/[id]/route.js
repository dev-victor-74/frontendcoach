import { getCurrentUser } from "@/app/utils/actions/get-current-user";
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

export const DELETE  = async()=>{

    try {

        const currentUser = await getCurrentUser();
        if(!currentUser){
            return new NextResponse("unauthorised",{status:403});
        }
        await prismaDb.savedChallenge.delete({
            where:{
                id:params.id,
                userId:currentUser.id
            }
        })
        return NextResponse.json("Deleted",{status:200});

    } catch (error) {

        return new NextResponse(JSON.stringify(error),{status:500});
        
    }
}