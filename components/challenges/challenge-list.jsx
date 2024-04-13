"use client"

import { useEffect, useState } from 'react';
import ChallengeCard from './challenge-card'
import Loading from '../status/loading';
import useSWR from 'swr';
import axios from 'axios';
import toast from 'react-hot-toast';

const ChallengeList = ({currentUser}) => {

  const fetcher=async(url)=>{
     try {
       const challenges = await axios.get(url);
       return challenges;
     } catch (error) {
       toast.error("something went wrong, please check your network connection")
     }
  }

  const[ismounted, setisMounted] = useState(false);

  const{data}  = useSWR("/api/challenges/all", fetcher)


  useEffect(()=>{
     
    setisMounted(true);
  },[])

  if(!ismounted){
    return <Loading/>
  }
   
  return (
    <section 
    className='w-full md:w-[94%] mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
     {
      data?.data?.map(item=>(
       <ChallengeCard key={item?.id} item ={item} currentUser={currentUser}/>
     ))
     }
    </section>
  )
}

export default ChallengeList
