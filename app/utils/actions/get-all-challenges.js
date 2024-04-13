import prismaDb from "../db"

export const getAllChallenges = async()=>{

  try {
    const challenges = await prismaDb.challenge.findMany();

    if(!challenges) return null;

    return challenges;
  } catch (error) {
     return null;
  }

}

export const getAllSubmissions = async()=>{

  try {
    const submissions = await prismaDb.project.findMany({

      include:{
              user:{
                include:
                {
                  profile:true
                }
              },
              
            }
    });

    if(!submissions) return null;

    return submissions;
  } catch (error) {
     return null;
  }

}