"use client"

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdCheck, MdCopyAll } from "react-icons/md";


const Glass = () => {
 
  const[isCopied, setisCopied] = useState(false);
  const[bgCopied, setBgCopied] = useState(false);
  // const[bgUrl, setBgUrl] = useState("")
  const[glass, setGlass] = useState("")
  const[glassCopy, setGlassCopy] = useState("")
  const[blurModal, setBlurModal] = useState({
    blur:4,
    opacity:0.2
  });

  const onChangeBlur=(e)=>{
    setBlurModal(prev=>(
      {...prev, [e.target.name]:e.target.value}
    ));
  }
  
  const onGenerateBlur=()=>{
     const blurStyle = `{\n background:rgba(255,255,255, ${blurModal.opacity}); \n backdrop-filter:blur(${blurModal.blur}px);\n border:1px solid rgba(255,255,255, ${blurModal.opacity}) \n}`
     
     const b={
          background:`rgba(255,255,255, ${blurModal.opacity})`,
          backdropFilter:`blur(${blurModal.blur}px)`,
          border: `1px solid rgba(255,255,255, ${blurModal.opacity})`
      }
      setGlass(b);
      setGlassCopy(blurStyle);
  }

  const onCopy=(value,type)=>{
    if(type === "css"){
      navigator.clipboard.writeText(value);
      setisCopied(true);
      toast.success("copied!")
      
      setTimeout(()=>{
        setisCopied(false)
      },1000)
    }else if (type === "url")
    {
      setBgCopied(true);
      navigator.clipboard.writeText(value);
      
      setTimeout(()=>{
        setBgCopied(false)
      },1000)
    }else {
      return null;
    }
  }

  useEffect(()=>{
       onGenerateBlur();

       return()=>onGenerateBlur();
  },[blurModal.blur, blurModal.opacity])

  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-6 px-3 py-2 mt-2">
        <div className="w-full md:w-[40%] h-full flex flex-col justify-center gap-6">

             <div className="flex flex-col w-full shadow-md px-1 py-1 gap-2 ring-1 ring-slate-400 rounded-sm mt-[1px]">
                 <span className="text-sm font-semibold">Blur</span>
                 <div className="flex items-center justify-between pb-2">
                     <input type="range" name="blur" value={blurModal.blur} onChange={onChangeBlur} className="h-[7px] w-[88%] cursor-pointer" min='0' max="100" step="0.5"/>
                 </div>
             </div>

             <div className="flex flex-col w-full gap-2 shadow-md px-1 py-1 ring-1 ring-slate-400 rounded-sm">
                 <span className="text-sm font-semibold">Opacity</span>
                 <div className="flex items-center justify-between pb-2">
                     <input type="range" name="opacity" value={blurModal.opacity} onChange={onChangeBlur} className="h-[7px] w-[88%] cursor-pointer" min='0' max="1" step="0.05"/>
                 </div>
             </div>

             {/* <div className="flex flex-col w-full shadow-md px-1 py-1 ring-1 ring-slate-400 rounded-sm">
                 <span className="text-sm font-semibold">Background url</span>
                 <div className="flex items-center justify-between">
                     <input type="text"value={bgUrl} onChange={e=>setBgUrl(e.target.value)}
                       className="h-[7px] w-[88%] cursor-pointer"/>
                     <span className="h-5 w-8 flex items-center justify-center p-1 font-semibold text-xs 
                        rounded-sm text-zinc-200">
                       {bgCopied? 
                       <MdCheck size={18} color='green' className='cursor-pointer'/>:
                       <MdCopyAll size={18} color='blue' className='cursor-pointer'
                        onClick={()=>onCopy(bgUrl,"url")}
                       />
                       }
                     </span>
                 </div>
             </div> */}

             <div className="flex flex-col w-full shadow-md px-1 py-1 ring-1 ring-slate-400 rounded-sm">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Css</span>
                  <div className="px-1 py-1 rounded-sm">
                    {isCopied? 
                       <MdCheck size={18} color='green' className='cursor-pointer'/>:
                       <MdCopyAll size={18} color='blue' className='cursor-pointer'
                        onClick={()=>onCopy(glassCopy,"css")}
                       />
                       } 
                  </div>
                </div>
                 <div className="flex items-center justify-between">
                    <textarea value={glassCopy} readOnly className="bg-gray-200 focus:outline-none w-full 
                     rounded-sm px-2 py-1 h-24 md:h-32 resize-none font-semibold text-[13px]"/>
                 </div>
             </div>
        </div>

        <div className="w-full md:w-[60%] h-[400px] bg-slate-400 rounded-sm flex items-center justify-center" id="blurbg">
            <div className="w-full max-w-[350px] h-[350px] md:h-[350px] rounded-sm"
              style={(glass === "")? {} : glass}
            />
        </div>
    </div>
  )
}

export default Glass
