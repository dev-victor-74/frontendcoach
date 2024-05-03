import prismaDb from "../db"

export const deleteSavedChallenges =async(id,userId)=>{
    try {
        await prismaDb.savedChallenge.deleteMany({
            where:{
                id,
                userId
            }
        })
        return null
    } catch (error) {
         return null
    }
}

export const increaseSolvers =async(challengeId)=>{
    try {
        const challenge = await prismaDb.challenge.findUnique({
            where:{
              id:challengeId
            }
        });
        
        if(!challenge) return null

        await prismaDb.challenge.update({
            where:{
                id:challengeId
            },
            data:{
                solvers:challenge.solvers + 1
            }
        })
    } catch (error) {
        
    }
}
