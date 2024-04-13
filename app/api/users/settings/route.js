import { createApi } from "@/app/utils/actions/create-api-limit";
import { getCurrentUser } from "@/app/utils/actions/get-current-user"
import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const POST = async(req)=>{

    try {
        const body = await req.json()

        const currentUser = await getCurrentUser();
        console.log(currentUser)
        
        if(!currentUser) {
            return new NextResponse("unauthorised",{status:"403"})}

       const profile = await prismaDb.profile.create({
        data:{
         userId:currentUser?.id,
         level:body
        }
       })

    if(profile){
        await createApi(currentUser?.id, currentUser?.email)
    }

       return NextResponse.json(profile);
    } catch (error) {
        console.log(error)
        return new NextResponse("Setting-error", {status:500})
    }
}