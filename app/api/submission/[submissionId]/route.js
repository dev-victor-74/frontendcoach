import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";


export const DELETE = async(req, {params})=>{
    try {
        if(!params.submissionId) return new NextResponse("missing fields",{status:401})
        const submission = await prismaDb.project.delete(
            {
                where:{
                    id:params.submissionId,
                }
            }
        );
        if(!submission) return new NextResponse("can't find project",{status:404});

        return NextResponse.json("deleted",{status:200});
        
    } catch (error) {
        return new NextResponse(error)
    }
}