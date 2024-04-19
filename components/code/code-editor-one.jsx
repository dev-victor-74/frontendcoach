"use client"

import Split from "react-split";
import CodeOutput from "./code-output";
import EditorPanel from "./editor";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


import { useEditorSwitchState, useIframeSize } from "@/lib/sidebar-store";
import clsx from "clsx";
import OpenChallenge from "./open-challenge";
import { useEffect, useState } from "react";

const CodeEditorOne = ({htmlCode,jsCode,
  cssCode,onChangeHtml, onChangeCss, onChangeJs,challenge}) => {

  const{isHtml, isCss, isJs, onOpenHtml, onOpenCss, onOpenJs}  = useEditorSwitchState();
  const{onSet, onPause, isOutput, isViewChallenge} = useIframeSize();
  const[outputCode, setOutputCode] = useState("")
  
  const handlePause=()=>{
    return setTimeout(()=>{
       onPause()
    },700)
  }

  const codeOutput =  
  `
    ${htmlCode}
    <style>
    ${cssCode}
    </style>
    <script>
    ${jsCode} 
    </script>
  `
  const handleOutput =()=>{
    setTimeout(()=>{
     setOutputCode(codeOutput)
    },1000)
  }
    useEffect(()=>{
      handleOutput();

      return()=>handleOutput();
    },[htmlCode, cssCode, jsCode])
    

  return (
    <div className='w-full bg-slate-500'>
        <Split
         className="split"
         direction="horizontal"
         minSize={0}
         sizes={[50, 50]}
         expandToMin={true}
         gutterSize={15}
         gutterAlign="center"
         snapOffset={4}   
         dragInterval={1}
         cursor="e-resize"
         onDrag={()=>{
          const elem = document.getElementById("frame")
           onSet(elem.offsetHeight, elem.offsetWidth)
         }}
         onDragEnd={()=>{
           handlePause()
         }}
        >
          <div className="w-full h-[calc(100vh-70px)]">
            <div className="w-full bg-[#010216f5] h-8 px-[1px] flex items-center pt-[2px]">
              <button onClick={onOpenHtml} 
                className={clsx("rounded-[1px] w-[100px] flex items-center gap-2 justify-center border h-full border-zinc-900 font-semibold text-rose-600 px-2 py-[2px] text-sm",isHtml?"bg-zinc-900":"bg-transparent")}>
                <FaHtml5/>
                <span>html</span>
              </button>
              <button onClick={onOpenCss}
                className={clsx("rounded-[1px] w-[100px] flex items-center gap-2 justify-center border h-full border-zinc-900 font-semibold text-blue-600 px-2 py-[2px] text-sm",isCss?"bg-zinc-900":"bg-transparent")}>
                <FaCss3/>
                 <span className="text-sm font-semibold">css</span>
              </button>
              <button onClick={onOpenJs} 
                className={clsx("rounded-[1px] w-[100px] flex items-center gap-2 justify-center border h-full border-zinc-900 font-semibold text-yellow-600 px-2 py-[2px] text-sm",isJs?"bg-zinc-900":"bg-transparent")}>
                <IoLogoJavascript/>
                <span className="text-sm font-semibold">js</span>
              </button>
            </div>
            {isHtml?
              <EditorPanel
                lang="html"
                val= {htmlCode}
                onChange ={onChangeHtml}
              />
              :
             isCss?
              <EditorPanel
              lang="css"
              val= {cssCode}
              onChange ={onChangeCss}
              />
              :
             isJs? 
             <EditorPanel
              lang="javascript"
              val= {jsCode}
              onChange ={onChangeJs}
             />
              :
              null
            }
          </div>
          <div className="w-full h-full">
          { isOutput ?  <CodeOutput
              id = "frame"
              code={outputCode}
             /> :
           isViewChallenge?
              <OpenChallenge
               id="frame" challenge={challenge}/>
               : null
              }
            </div>
        </Split>
    </div>
  )
}

export default CodeEditorOne
