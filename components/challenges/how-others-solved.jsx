"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import useSWR from "swr"
import SubCard from "./subcard"


const HowOthersSolved = ({id}) => {

    const [isMounted, setisMounted] = useState(false);

     const fetcher = async(url)=>{
        try {
            const res = await axios.get(url);
            return res;
        } catch (error) {
           console.log(error) 
        }
     }

     const {data:projects} = useSWR(`/api/submission/same?id=${id}`, fetcher);

     useEffect(()=>{
         setisMounted(true);
     },[])
     if(!isMounted){
        return null
     }

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-4 gap-4'>
       {
        projects?.data?.map(d=>(
            <SubCard data={d} key={d?.id}/>
        ))
       }
    </div>
  )
}

export default HowOthersSolved
