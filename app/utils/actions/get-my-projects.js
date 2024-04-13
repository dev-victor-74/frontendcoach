import prismaDb from "../db"
import { getCurrentUser } from "./get-current-user";

export const getMyProjects = async()=>{
 
  try {
    const currentUser = await getCurrentUser();
    const projects = await prismaDb.project.findMany({
        where:{
            userId:currentUser.id
        }
    });

    if(!projects) return null;

    return projects;
  } catch (error) {
     return null;
  }

}