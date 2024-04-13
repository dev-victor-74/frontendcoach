import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
    try {
        const currentUser = await getCurrentUser();
        const {projectId} = params

        if(!currentUser) return new NextResponse("unauthorised",{status:403});

        const myProject = await prismaDb.project.findUnique(
            {
                where:{
                    id:projectId,
                    userId:currentUser.id
                }
            }
        );
        if(!myProject) return new NextResponse("can't find project",{status:404});

        return NextResponse.json(myProject)
        
    } catch (error) {
        return new NextResponse(error)
    }
}

export const DELETE =async(req,{params})=>{
    try {
        const currentUser = await getCurrentUser();
        if(!currentUser) return new NextResponse("unauthorised",{status:403});

        if(!params.projectId) return new NextResponse("missing fields",{status:404});

        await prismaDb.project.delete({
            where:{
                id:params.projectId
            }
        })
        return NextResponse.json("deleted");
    } catch (error) {
       return new NextResponse(JSON.stringify(error),{status:500}) 
    }

}