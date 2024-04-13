import prismaDb from "@/app/utils/db";
import { NextResponse } from "next/server";

export const DELETE =async(req, {params})=>{
   
    try {
        const userId = params.userId;

        await prismaDb.user.delete({
            where: {
                id: userId
            }
        })
        return NextResponse.json({message:"user has been deleted", status:201});
    } catch (error) {
        return new NextResponse(JSON.stringify({error, status: 500}));
    }
}