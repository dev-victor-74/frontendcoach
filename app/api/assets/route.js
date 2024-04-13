import { getCurrentUser } from "@/app/utils/actions/get-current-user";
import prismaDb from "@/app/utils/db";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async(req)=>{
   try {
     const body = await req.json();
     const currentUser = await getCurrentUser();

     if(!currentUser) return new NextResponse("unauthorised",{status:401});
    //  if(currentUser?.role === UserRole.GUEST){
    //     return new NextResponse("unauthorised",{status:403});
    //  }
    if(!body.url || !body.name) return new NextResponse("fields missing" ,{status:404});

     const assets =  await prismaDb.imageAssets.create(
            {
                data:{
                    imageUrl:body.url,
                    name: body.name
                }
            }
        );
     return NextResponse.json(assets);
   } catch (error) {
    console.log(error);
     return new NextResponse(JSON.stringify(error),{status:500});
   }
}

export const GET =async(req)=>{
   try {
      const images = await prismaDb.imageAssets.findMany({
      });
      return NextResponse.json(images);

   } catch (error) {
    return new NextResponse(JSON.stringify(error),{status:500})
   }
}