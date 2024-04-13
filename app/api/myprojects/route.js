import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import prismaDb from "@/app/utils/db"
import { NextResponse } from "next/server";

export const GET = async(req)=>{
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) return new NextResponse("unauthorised",{status:403});
        
        const myProjects = await prismaDb.project.findMany(
            {
                where:{
                    userId: currentUser.id
                }
            }
        );
        if(myProjects) return NextResponse.json(myProjects)

        return new NextResponse("no projects", {status:404});
    } catch (error) {
         return new NextResponse(error, {status:500})
    }
}