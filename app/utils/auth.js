import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import prismaDb from "./db";



export const authOptions = {

    adapter: PrismaAdapter(prismaDb),
 
     providers:[
         GithubProvider({
             clientId: process.env.GITHUB_ID,
             clientSecret: process.env.GITHUB_SECRET,
         }),
         GoogleProvider({
             clientId: process.env.GOOGLE_CLIENT_ID,
             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         })
     ],
     session:{
         strategy:"jwt"
     },
     secret:process.env.NEXTAUTH_SECRET
 }