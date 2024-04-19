"use client"

import { Editor } from '@monaco-editor/react';
import {useEffect, useState } from 'react';


const EditorPanel = ({lang, val, onChange}) => {

  const[settings, setSettings] = useState(null);


  useEffect(()=>{
    const item = JSON.parse(localStorage.getItem("editor-setting"));
    setSettings(item)
   },[]);

  return (
    <div className='w-full h-full'>
      <Editor
        className='bg-[#010216f5] h-full'
        theme="vs-dark"
        language={lang}
        value={val}
        onChange={onChange}
        options={{
          minimap:{
            enabled: true},
         wordWrap: true,
         fontSize: "13px",
         fontFamily:"Fira code"
        
        }}
      />
    </div>
  )
}

export default EditorPanel
