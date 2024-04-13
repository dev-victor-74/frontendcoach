import prismaDb from "../db"

export const updatePro=async(email,planType)=>{
    try {
        const apilimit = await prismaDb.Userapilimit.findUnique({
            where:{
                email
            }
        });

        if(!apilimit){
            return null
        }
        await prismaDb.Userapilimit.update(
         {
            where:{
                email
            },
            data:{
                plan: planType,
                count: apilimit.count + 40
            }
         }
        )
    } catch (error) {
        
    }
}