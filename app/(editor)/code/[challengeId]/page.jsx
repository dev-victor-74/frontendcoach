"use client"

import CodeEditorOne from "@/components/code/code-editor-one";
import CodeEditorThree from "@/components/code/code-editor-three";
import CodeEditorTwo from "@/components/code/code-editor-two";
import CodeNavbar from "@/components/code/code-navbar";
import Loading from "@/components/status/loading";
import { useEditorState } from "@/lib/sidebar-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";


const Codepage = ({params}) => {

  const[isMounted, setisMounted] = useState(false);
  const[isExisting, setisExisting] = useState(false);
  const[subloading, setsubLoading] = useState(false);
  const[sabloading, setsabLoading] = useState(false);
  const[cData, setcData] = useState(null)

  const{isOne, isTwo, isThree} = useEditorState();
  const router = useRouter();

  const [htmlCode, sethtmlCode] =
   useState(`<html>
      <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Remove the line below if you don't want to use TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
  <!-- Your code goes here -->
      </body>
</html>
  `)
  const [cssCode, setcssCode] = useState(`
    body{
      margin:0;
      padding:0;
      height:100%;
      font-family:"Inter", sans-serif; 
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
  
  useEffect(()=>{
    setisMounted(true);
    prepareChallenge();

    return ()=>prepareChallenge();
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
