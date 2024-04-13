"use client"

import { Editor } from "@monaco-editor/react"
import Split from "react-split"
import CodeOutput from "./code-output"
import EditorPanel from "./editor"

const CodeEditorThree = () => {
    return (
      <div className='w-full bg-slate-500'>
      <Split
        className="flex flex-col h-[calc(100vh-35px)] w-full"
        direction="vertical"
        minSize={0}
        sizes={[50, 50]}
        expandToMin={true}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={4}   
        dragInterval={1}
        cursor="s-resize"
      >

        <Split
          className="flex flex-row h-[calc(100vh-35px)] w-full"
          direction="horizontal"
          minSize={0}
          sizes={[50, 50,50]}
          expandToMin={true}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={1}   
          dragInterval={1}
          cursor="e-resize"
          >
           <EditorPanel/>
           <EditorPanel/>
           <EditorPanel/>
        </Split>

         <CodeOutput/>
      </Split>
  </div>
    )
  }
  
  export default CodeEditorThree