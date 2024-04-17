import prismaDb from "../db"
import { getSession } from "../server-session"

export const getCurrentUser = async()=>{

  const session = await getSession();

  if(!session?.user?.email){
    return null
  }
  try {
    const user = await prismaDb.user.findUnique({
        where:{
            email: session.user.email
        },
        include:{
          profile: true,
          Userapilimit:true,
          credential:true
        },
    });

    if(!user) return null;
    return user;
  } catch (error) {
     return null;
  }

}

export const getCurrentUserByid = async(id)=>{

  try {
    const user = await prismaDb.user.findUnique({
        where:{
            id
        },
        include:{
          profile: true,
          Userapilimit:true
        },
    });

    if(!user) return null;
    return user;
  } catch (error) {
     return null;
  }

}

