import { PrismaClient } from "@prisma/client";

let prismaDb;
if(process.env.NODE_ENV === "production"){
    prismaDb = new PrismaClient();
}else{
    if(!global.prismaDb){
        global.prismaDb = new PrismaClient();
    }
    prismaDb = global.prismaDb;
}
export default prismaDb;