"use client"

import { useEffect, useState } from 'react';
import ChallengeCard from './challenge-card'
import Loading from '../status/loading';


const ChallengeList = ({currentUser,challenges}) => {

  const[ismounted, setisMounted] = useState(false);

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
      challenges?.map(item=>(
       <ChallengeCard key={item?.id} item ={item} currentUser={currentUser}/>
     ))
     }
    </section>
  )
}

export default ChallengeList
