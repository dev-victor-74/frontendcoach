import prismaDb from "../db"

export const getAllUsers = async()=>{

  try {
    const users = await prismaDb.user.findMany({
      include:{
        profile:true,
        Userapilimit:true,
        projects:true
      },
    });

    if(!users) return null;

    return users;
  } catch (error) {
     return null;
  }

}