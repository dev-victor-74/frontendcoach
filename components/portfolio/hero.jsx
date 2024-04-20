"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = ({user}) => {

    const[mounted, setMounted] = useState(false);

    useEffect(()=>{
       setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }

  return (
    <section className='w-full flex flex-col-reverse gap-2 md:flex-row items-center justify-between mt-10 px-2'>
        <div className="flex flex-col gap-4 w-full md:w-[70%]">
             <h2 className='text-3xl md:text-5xl text-center md:text-start font-bold text-zinc-300'>I am {user?.profile?.userName ? user?.profile?.userName : user?.name},<strong className='text-purple-800'>
              a Frontend Developer  </strong> </h2>
              <p className='text-sm text-center md:text-start font-medium text-zinc-300'>
                 {user?.profile?.profileDesc}
              </p>
              <div className="w-full flex items-center gap-2">
                  <h2 className='text-xl font-bold text-zinc-300'>Contact <strong className='text-purple-800'>me</strong> </h2>
                  <div className="flex items-center gap-2 ml-4">
                     {user?.profile?.twitterLink && <Link href={user?.profile?.twitterLink}>
                        <FaSquareXTwitter size={22} color='silver'/>
                    </Link>}
                    {user?.profile?.LinkedinLink && <Link href={user?.profile?.LinkedinLink}>
                        <FaLinkedin size={22} color='blue'/>
                    </Link>}
                  </div>
              </div>
        </div>
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full relative ring-2 ring-purple-600">
             <Image
               src={user?.profile?.profileurl ? user?.profile?.profileurl : user?.image}
               fill
               alt={user?.profile?.userName ? user?.profile?.userName : user?.name}
               sizes='120px 90px'
               className='rounded-full object-cover'
             />
        </div>
    </section>
  )
}

export default Hero
