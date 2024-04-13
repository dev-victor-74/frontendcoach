"use client"

import React, { useEffect, useState } from 'react'
import SubCard from './subcard'
import Loading from '../status/loading';

const SubList = ({projects}) => {
 
    const[ismounted, setisMounted] = useState(false);
    console.log(projects)
    useEffect(()=>{
       
      setisMounted(true);
    },[])
  
    if(!ismounted){
      return <Loading/>
    }
     
  return (
    <section className='w-full md:w-[94%] mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      { projects?.map((project)=>(

          <SubCard key={project.id} data = {project}/>
      ))
        }
    </section>
  )
}

export default SubList
