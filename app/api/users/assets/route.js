import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import { MAX_FILE_UPLOAD } from "@/app/utils/constants";
import prismaDb from "@/app/utils/db";

import { NextResponse } from "next/server";

export const POST = async(req)=>{

    try {
        const body = await req.json();
        const currentUser = await getCurrentUser();

        if(!currentUser) {
            return new NextResponse("must be loggin!",{status:401})}
      
       const files = await prismaDb.userimage.findMany({
        where:{
            userId:currentUser.id,
        }
        });

       if(files.length >= MAX_FILE_UPLOAD) return new NextResponse("image upload error become a pro",{status:403});

       const file = await prismaDb.userimage.create({
         data:{
            userId: currentUser.id,
            imageUrl: body.url,
            name: body.name,
            count:  files.length + 1
          },
       });

       return NextResponse.json(file);
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error), {status:500})
    }
}

export const GET = async(req)=>{

    try {

        const currentUser = await getCurrentUser();

        if(!currentUser) {
            return new NextResponse("must be loggin!",{status:"401"})}

       const files = await prismaDb.userimage.findMany({
         where:{
            userId: currentUser.id
          },
       });

       return NextResponse.json(files);
    } catch (error) {
        return new NextResponse("user asset error", {status:500})
    }
}