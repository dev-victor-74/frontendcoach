import prismaDb from "../db"

export const getChallenge = async(id)=>{

  try {
    const challenge = await prismaDb.challenge.findUnique(
        {
            where:{
                id,
            }
        }
    );

    if(!challenge) return null;

    return challenge;
  } catch (error) {
     return null;
  }

}

export const getSubmission = async(id)=>{

  try {
    const project = await prismaDb.project.findUnique(
        {
            where:{
                id
            },
            include:{
              user:{
                include:
                {
                  profile:true
                }
              },
              
            }
        }
    );

    if(!project) return null;

    return project;
  } catch (error) {
     return null;
  }

}