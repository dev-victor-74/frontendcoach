import prismaDb from "../db"

export const updatePro=async(email,planType,custCode,subCode)=>{
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
                count: apilimit.count + 40,
            }
         }
        )
        await prismaDb.SubscriptionCredentials.create({
            data:{
               customerEmail:email,
               customerId: custCode,
               subscriptionId:subCode 
            }
        })
    } catch (error) {
        
    }
}


export const onChargeSuccessPro=async(email,planType)=>{
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
                count: apilimit.count + 40,
            }
         }
        )
    } catch (error) {
        
    }
}