import { NextResponse } from "next/server"
import { getCurrentUser } from "./get-current-user"
import prismaDb from "../db";

export const increasePoint =async(challengePoint)=>{
   try {
     const currentUser = await getCurrentUser();
     if(!currentUser) return new NextResponse("unauthorised",{status:403});

     const profile = await prismaDb.profile.findUnique({
        where:{
            userId:currentUser?.id
        }
     })
     console.log(profile)

     if(!profile) return new NextResponse("unauthenticated",{status:401});
     console.log(profile.points)

     const p = profile?.points + challengePoint
     await prismaDb.profile.update({
        where:{
            userId:currentUser?.id

        },
        data:{
           points: p
        }
     })

   } catch (error) {
    return new NextResponse(JSON.stringify(error),{status:500})
   }
}

export const decreaseCredit =async(challengePoint)=>{
    try {
      const currentUser = await getCurrentUser();
      if(!currentUser) return new NextResponse("unauthorised",{status:403});

      const credit = await prismaDb.userapilimit.findUnique({
        where:{
            userId:currentUser?.id
        }
      });

      if(!credit) return new NextResponse("unauthenticated",{status:401});

     
 
      await prismaDb.userapilimit.update({
         where:{
             userId:currentUser?.id
         },
         data:{
            count: credit?.count - challengePoint,
         }
      })

      return NextResponse.json("updated!");
 
    } catch (error) {
     return new NextResponse(JSON.stringify(error),{status:500})
    }
 }