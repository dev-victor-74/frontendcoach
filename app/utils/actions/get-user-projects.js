import prismaDb from "../db"

export const getUserPortfolio = async(id)=>{
 
  try {
    const portfolio = await prismaDb.project.findMany({
        where:{
            userId:id
        },
        include:{
          user:{
            include:{
                profile:true
            }
          }
        }
    });

    if(!portfolio) return null;

    return portfolio;
  } catch (error) {
     return null;
  }

}