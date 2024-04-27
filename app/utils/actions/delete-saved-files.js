import prismaDb from "../db"
import { getCurrentUser } from "./get-current-user"

export const deleteSavedChallenges =async(id)=>{
    const currentUser = await getCurrentUser();
    try {
        await prismaDb.savedChallenge.deleteMany({
            where:{
                id,
                userId:currentUser.id
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
