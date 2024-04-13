import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";


export const PATCH=async(req, {params})=>{
    try {
        const body = await req.json(); 
        const profileid = params.profileId;
        const currentUser = await getCurrentUser();
        console.log(body)

        if(!profileid){
            return new NextResponse("profile missing",{status:401});
        }

        if(!currentUser){
            return new NextResponse("You must be logged in",{status:403});
        }

        const userProfile = await prismaDb.profile.update({
            where:{
                id:profileid,
                userId:currentUser?.id,
            },
            data:{
                level:body.level,
                profileurl:body.url,
                userName:body.username,
                profileDesc:body.bio,
                twitterLink:body.twitter,
                LinkedinLink:body.linkedin
            }
        });
        return NextResponse.json(userProfile, {status:200})
    } catch (error) {
        //  console.log(error)
         return new NextResponse(JSON.stringify(error),{status:500});
    }
}