import prismaDb from "../db"

export const removePro=async(email,planType)=>{
    try {
      
        await prismaDb.Userapilimit.update(
         {
            where:{
                email
            },
            data:{
                plan: planType,
            }
         }
        )
    } catch (error) {
        
    }
}