"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { app } from '@/app/utils/firebase';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { FaCamera } from 'react-icons/fa';
import Loading from './status/loading';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';


const SettingsForm = ({currentUser}) => {

   const[isMounted, setisMounted] = useState(false);
   const{profile} = currentUser || {};
   const router = useRouter();

   const [username, setUsername] = useState("");
   const [bio, setBio] = useState("");
   const [level, setLevel] = useState("");
   const [twitter, setTwitter] = useState("");
   const [linkedin, setLinkedin] = useState("");
   const [file, setFile] = useState(null);
   const [url, setUrl] = useState(null);
   const [loading, setLoading] = useState(false);


   const handleFileUpload = async (fil) => {
     if(!fil) return null;

     const name = new Date().getTime() + fil.name;
     const storage = getStorage(app);
     const storageRef = ref(storage, `images/${name}`);
   
     await uploadBytes(storageRef, fil);
     const ur = await getDownloadURL(storageRef);
     setUrl(ur);
   };

   const onSubmit=async()=>{
        try {
          setLoading(true);
          if(!url) return;
          const userProfile = await axios.patch(`/api/users/update/${profile?.id}`,{level, username,bio,twitter,linkedin, url});
          console.log(userProfile);
     } catch (error) {
        console.log(error);  
     }finally{
          setUrl(null);
          router.refresh();
          setLoading(false);
     }
   }
  console.log(file)
   useEffect(()=>{
        file && handleFileUpload(file)

   },[file])

   useEffect(()=>{
     if(currentUser){
          setUsername(currentUser?.profile?.userName? currentUser?.profile?.userName : currentUser?.name)
          setBio(currentUser?.profile?.profileDesc)
          setLevel(currentUser?.profile?.level)
          setTwitter(currentUser?.profile?.twitterLink)
          setLinkedin(currentUser?.profile?.LinkedinLink)
     }
   },[])

   useEffect(()=>{
     setisMounted(true)
   },[])

   if(!isMounted){
    return <Loading/>;
   }

  return (
<section className='w-full h-full md:h-[80vh] flex bg-slate-100 rounded-sm px-2 py-2'>
    <div className='w-full h-full flex flex-col md:flex-row'>
        <div className="w-full flex flex-col items-center justify-center gap-3">
            <h1 className='text-xl font-bold'>Profile Information</h1>
            <div className="w-full mx-auto px-2 py-1 flex gap-8 ">
                <div className="relative ml-8">
                <Image
                  height={100}
                  width={200}
                  alt='profile'
                  priority
                  src={
                     (!currentUser?.profile?.profileurl)? currentUser?.image : currentUser?.profile?.profileurl
                  }
                  className='rounded-full w-[80px] h-[80px] border object-cover'
               />
               <label htmlFor="profile" className='absolute bottom-2 right-1'>
                    <FaCamera className="w-6 h-6 text-gray-800 cursor-pointer"/>
               </label>
               <input type="file" onChange={e=>setFile(e.target.files[0])} id='profile' accept='image/*' className='hidden' />
            </div> 
             {url && <div className="w-20 h-20 bg-slate-500 rounded-full">
                    <Image
                         height={100}
                         width={200}
                         alt='profile'
                         priority
                         src={url}
                         className='rounded-full w-[80px] h-[80px] border object-cover'
                     />
             </div>}
            </div>
            <div className="w-full md:w-[80%] rounded-sm flex flex-col gap-1">
                 <span className='font-semibold text-sm'>Username</span>
                 <input value={username} placeholder='' onChange={e=>setUsername(e.target.value)} type="text" className='outline-none ring-1 w-full ring-gray-800 focus:ring-blue-600 px-2 py-2 rounded-sm' />
            </div>
            <div className="w-full md:w-[80%] rounded-sm flex flex-col gap-1">
                 <span className='font-semibold text-sm'>Bio</span>
                 <textarea value={bio} placeholder={profile?.profileDesc} onChange={e=>setBio(e.target.value)} className='outline-none ring-1 w-full ring-gray-800 focus:ring-blue-600 px-2 py-2 rounded-sm' />
            </div>
            <div className="w-full md:w-[80%] rounded-sm flex flex-col gap-1">
                 <span className='font-semibold text-sm'>Level</span>
                <select name="" value={level} className='ring-[1px] py-2 rounded-sm ring-gray-800' onChange={e=>setLevel(e.target.value)}>
                    <option value="">choose a level</option>  
                    <option value="Beginner">Beginner</option>  
                    <option value="Intermediate">Intermediate</option>  
                </select>
            </div>

            
        </div>
        <div className="w-full md:-1/2 flex flex-col items-center justify-center gap-3">
             <h1 className='text-xl font-bold mt-6 md:mt-0'>Social Links</h1>
            <div className="w-full md:w-[80%] rounded-md flex flex-col gap-1 mt-2">
                 <span className='font-semibold text-sm'>Twitter</span>
                 <input value={twitter} onChange={e=>setTwitter(e.target.value)} type="url" className='outline-none ring-1 ring-gray-800 focus:ring-blue-600 px-2 py-2 rounded-sm' />
            </div>
            <div className="w-full md:w-[80%] rounded-md flex flex-col gap-1 mt-2">
                 <span className='font-semibold text-sm'>Linkedin</span>
                 <input value={linkedin} onChange={e=>setLinkedin(e.target.value)} type="url" className='outline-none ring-1 ring-gray-800 focus:ring-blue-600 px-2 py-2 rounded-sm' />
            </div>
           
            <button 
             disabled={loading}
             onClick={onSubmit}
             className={clsx('bg-blue-600 px-2 rounded-md w-full md:w-[80%] py-[10px] hover:opacity-90 text-sm font-semibold text-zinc-200',loading && "opacity-[0.5] bg-blue-300")}
            >Save</button>
        </div>
    </div>
    </section>
  )
}

export default SettingsForm
