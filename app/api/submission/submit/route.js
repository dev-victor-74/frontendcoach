import { deleteSavedChallenges, increaseSolvers } from "@/app/utils/actions/delete-saved-files";
import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { decreaseCredit, increasePoint } from "@/app/utils/actions/increase-point";
import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
    try {
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("saveId");

        const body = await req.json();

        const currentUser = await getCurrentUser();

        if(!currentUser) return new NextResponse("unauthorised",{status:403})

        const savedProject = await prismaDb.project.create({
            data:{
                html:body.html,
                css:body.css,
                js:body.js,
                challengeId:body.challengeId,
                level:body.level,
                name:body.name,
                type:body.type,
                userId:currentUser?.id
            }
        });
       if(savedProject){
           await increaseSolvers(body.challengeId)
           await deleteSavedChallenges(id)
           await increasePoint(body.points)
           await decreaseCredit(body.points)
        }
        
        return NextResponse.json(savedProject,{status:201})

    } catch (error) {
        // console.log(error)
        return new NextResponse(JSON.stringify(error),{status:500})
    }
}