import prismaDb from "../db"

export const createApi =async(userId,userEmail)=>{
    try {
        const apilimit = await prismaDb.userapilimit.create({
            data:{
              userId,
              email:userEmail,
              count:10
              
            }
        });
        if(!apilimit) return null;
        return apilimit;
    } catch (error) {
        return null
    }
}