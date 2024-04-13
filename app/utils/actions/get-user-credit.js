import prismaDb from "../db"

export const getCredit=async(email)=>{
    try {
        const apilimit = await prismaDb.userapilimit.findUnique({
            where:{
               email
            }
        });
        if(!apilimit) return null;

        return apilimit;
    } catch (error) {
         return null
    }
}