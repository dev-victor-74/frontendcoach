"use client"

import axios from 'axios'
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import UncompletedCard from './uncompleted-card';

const UncompletedProjects =() => {

  const[isMounted, setisMounted] = useState(false);

 const fetcher=async(url)=>{
   try {
     const res = await axios.get(url);
     return res;
   } catch (error) {
    //  console.log(error)
   }
 }

 const {data} = useSWR("/api/submission/save/create", fetcher)
  
 useEffect(()=>{
   setisMounted(true);
 },[])

 if(!isMounted){
  return null
 }
 
  return (
   data?.data.length &&
    <div className='w-full flex flex-col gap-2 bg-[#040414] mt-4 rounded-md py-2 px-2 pb-3'>
        <h1 className='text-2xl font-bold text-zinc-200'>Uncompleted Challenges</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.data?.map(d=>(
               <UncompletedCard key={d?.id} d={d}/>
            ))}
        </div>
    </div>
  )
}

export default UncompletedProjects
