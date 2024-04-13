"use client"
import Split from "react-split";
import CodeOutput from "./code-output";
import EditorPanel from "./editor";

const CodeEditorTwo = () => {


    return (
      <div className='w-full bg-slate-500'>
        <Split
          className="flex flex-row h-[calc(100vh-35px)]"
          direction="horizontal"
          minSize={0}
          sizes={[50, 50,50]}
          expandToMin={true}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={4}   
          dragInterval={1}
          cursor="e-resize"
        >
         <div className="flex flex-col h-[calc(100vh-35px)] w-full bg-slate-50">
             <div className="bg-slate-500 p-2 h-[50%]">
                <EditorPanel/>
             </div>
             <div className=" bg-slate-500 p-2 h-[20%]">
                <EditorPanel/>
             </div>
             <div className="bg-slate-500 p-2 h-[50%]">
                <EditorPanel/>
             </div>
          </div>
          <CodeOutput/>
        </Split>
    </div>
    )
  }
  
  export default CodeEditorTwo;

           