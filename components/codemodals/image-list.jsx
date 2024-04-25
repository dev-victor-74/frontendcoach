"use client"

import axios from 'axios';
import useSWR from 'swr';
import Loading from '../status/loading';
import ImageCard from './image-card';
import toast from 'react-hot-toast';

const ImageList = () => {


   const fetcher = async (url)=>{
    try {
     const res = await axios.get(url);
     return res?.data;
      
    } catch (error) {
      toast.error("failed to load images")
    }
   }

   const{data, isLoading} = useSWR("/api/assets", fetcher)

  return (
    <div className='w-full h-full overscroll-auto'>
       
               {
                 isLoading ?
                 <Loading/>
                 :
                 data?
                  <ImageCard data={data}/>
               : null
              }        
    </div>
  )
}

export default ImageList
