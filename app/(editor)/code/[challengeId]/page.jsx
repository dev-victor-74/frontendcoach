"use client"

import CodeEditorOne from "@/components/code/code-editor-one";
import CodeEditorThree from "@/components/code/code-editor-three";
import CodeEditorTwo from "@/components/code/code-editor-two";
import CodeNavbar from "@/components/code/code-navbar";
import Loading from "@/components/status/loading";
import { useEditorState } from "@/lib/sidebar-store";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";


const Codepage = ({params}) => {

  const[isMounted, setisMounted] = useState(false);
  const[isExisting, setisExisting] = useState(false);
  const[subloading, setsubLoading] = useState(false);
  const[sabloading, setsabLoading] = useState(false);
  const[cData, setcData] = useState(null);

  const searchParams = useSearchParams();
 
  const search = searchParams.get('saved');

  const{isOne, isTwo, isThree} = useEditorState();
  const router = useRouter();

  const [htmlCode, sethtmlCode] =
   useState(`<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

        <!-- Remove the line below if you don't want to use TailwindCSS -->
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
      <body>
  <!-- Your code goes here -->
  <!-- Edit the code below to get started -->
    
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#090727] py-6 sm:py-12">
        <img src="/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
        <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div class="relative bg-slate-200 px-6 ring-4 ring-blue-900 pt-10 pb-8 shadow-xl sm:mx-auto sm:max-w-lg sm:rounded-md sm:px-10">
          <div class="mx-auto max-w-md">
          <div className="flex flex-col">
          <div class="w-8 h-8 rounded-full mx-auto animate-bounce ring-8 ring-purple-800 bg-blue-800"></div>
          <h2 class="text-xl text-zinc-800 font-extrabold text-center mt-4">Welcome</h2>
        </div>
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-8 text-base leading-7 text-zinc-800">
                <p class="text-xl font-semibold">Start by editing the code inside the body tag </p>
                <ul class="space-y-4">
                  <li class="flex items-center">
                    <svg class="h-6 w-6 flex-none fill-sky-100 stroke-blue-800 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p class="ml-4 text-sm font-semibold text-zinc-900">
                      You are to build out this challenge and get it to look  as close as possible to the challenge file.
                    </p>
                  </li>
                  <li class="flex items-center">
                    <svg class="h-6 w-6 flex-none fill-sky-100 stroke-blue-800 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p class="ml-4 text-sm font-semibold text-zinc-900">
                      Your should have a clean and intuitive user interface.
                    </p>
                  </li>
                  <li class="flex items-center">
                    <svg class="h-6 w-6 flex-none fill-sky-100 stroke-blue-800 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="11" />
                      <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                    </svg>
                    <p class="ml-4 text-sm font-semibold text-zinc-900">Add animations to your project to show all hover states</p>
                  </li>
                </ul>
                <p class="text-blue-900 text-xs font-medium">This demo uses tailwind css, if you don't want to use it you can remove the script from the head section of the html tab</p>
              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-zinc-900">Want to learn more about Tailwind?</p>
                <p>
                  <a href="https://tailwindcss.com/docs" class="text-blue-800 hover:text-blue-900">Read the docs &rarr;</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </body>
</html>
  `)
  //"Inter Tight", sans-serif;
  const [cssCode, setcssCode] = useState(`
    body{
      margin:0;
      padding:0;
      height:100%;
      font-family:"Inter Tight", sans-serif; 
    }
  `)
  const [jsCode, setjsCode] = useState("")


  const onChangeHtml =(value,event)=>{
    sethtmlCode(prev=>{
      return`${prev, value}`
    })
  }

  const onChangeJs =(value,event)=>{
    setjsCode(prev=>{
      return`${prev, value}`
    })
  }

  
  const onChangeCss =(value, event)=>{
    setcssCode(prev=>{
         return `${prev, value}`
    })
 }

 const fetcher=async(url)=>{
  try {
    const challenges = await axios.get(url);
    return challenges;
  } catch (error) {
  }
}
const {data} = useSWR(`/api/challenges/${params.challengeId}`, fetcher)

  const onSave=async()=>{
      if(!isExisting){
        try {
           setsabLoading(true);
           await axios.post("/api/submission/save/create",{
            html:htmlCode,
            css:cssCode,
            js:jsCode,
            challengeId:params.challengeId,
            name: data?.data?.name
          })
          toast.success("Saved!");
        } catch (error) {
        }finally{
          setsabLoading(false);
        }
      }

      try {
        setsabLoading(true);
        await axios.patch(`/api/submission/save?id=${params?.challengeId}`,{
          html:htmlCode,
          css:cssCode,
          js:jsCode
        })
        toast.success("Saved!");
        
      } catch (error) {
        
      }finally{
        setsabLoading(false);
      }
     
  }
  const prepareChallenge=async()=>{
     try {
       const response = await axios.get(`/api/submission/save/${params.challengeId}`);
       const challenge = response?.data;
       if(challenge){
        setcData(challenge)
        setisExisting(true)
        sethtmlCode(challenge.html)
        setcssCode(challenge.css)
        setjsCode(challenge.js)
       }else{
        sethtmlCode(htmlCode);
        setcssCode(cssCode);
        sethtmlCode(htmlCode);
       }
     } catch (error) {
       
     }
  }
  

  const onSubmit=async()=>{
      setsubLoading(true);
    try {
       const res = await axios.post(`/api/submission/submit?saveId=${cData?.id}`,{html:htmlCode,css:cssCode,js:jsCode,challengeId:params.challengeId,level:data?.data.level,name:data?.data.name,type:data?.data.challengeType,points:data?.data.points});

       toast.success("submitted successfully");
       
    } catch (error) {
      toast.error("something went wrong,check your network connection and try again");
    }finally{
      setsubLoading(false);
      router.refresh();
    }

  }

  const prepC=async()=>{
    try {
      await prepareChallenge()
    } catch (error) {
      
    }
  }
  
  useEffect(()=>{
    setisMounted(true);
      search?.length && prepC()
    return ()=>prepC();
  },[])

  if(!isMounted){
    return <Loading/>
  }

  return (
    <div className="w-full bg-[#010216f5] h-screen overflow-hidden">
       <CodeNavbar  onSave={onSave} sabloading={sabloading} 
       onSubmit={onSubmit} loading={subloading} name={data?.data?.name} />
       <div className="w-full h-[calc(100vh-35px)]">
            {
              isOne? 
              <CodeEditorOne
                htmlCode = {htmlCode}
                cssCode ={cssCode}
                jsCode = {jsCode}
                onChangeHtml={onChangeHtml}
                onChangeCss={onChangeCss}
                onChangeJs={onChangeJs}
                challenge={data?.data}
              />
                :
              isTwo?
              <CodeEditorTwo/>
                :
              isThree?
              <CodeEditorThree/>
                :
              null  
            }
        <div className="h-2 w-full bg-[#010216f5] z-20 absolute bottom-0"/>
       </div>
    </div>
  )
}

export default Codepage
