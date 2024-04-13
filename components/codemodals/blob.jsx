"use client"

import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { MdCheck, MdCopyAll } from "react-icons/md"

const Blob = () => {
    
    const[radius, setRadius] = useState("");
    const[copyRadius, setCopyRadius] = useState("");
    const[isCopied, setIsCopied] = useState(false);
    const[boxRadius, setBoxRadius] = useState({
        rOne:30,
        rTwo:80,
        rThree:60,
        rFour:40,
        bg:"#100439"
    });

    const onChange=(e)=>{
        setBoxRadius(prev=>{
            return{...prev, [e.target.name]:e.target.value}
        })
    }

    const onCopy=()=>{
        navigator.clipboard.writeText(copyRadius);
        setIsCopied(true);
        toast.success("copied!");
   
        setTimeout(()=>{
          setIsCopied(false)
        },1000)
      }

    const onSetBorderRadius=()=>{
        const br = `${boxRadius.rOne}% ${100 - boxRadius.rOne}% ${100 - boxRadius.rThree}% ${boxRadius.rThree}% /${boxRadius.rFour}% ${boxRadius.rTwo}% ${100 - boxRadius.rTwo}% ${100 - boxRadius.rFour}%`
         const cr = `border-radius: ${br}`
         setRadius(br)
         setCopyRadius(cr)
    }

    useEffect(()=>{
       onSetBorderRadius();

       return()=>onSetBorderRadius();
    },[boxRadius.rFour,boxRadius.rOne,boxRadius.rThree, boxRadius.rTwo, boxRadius.bg])

  return (
    <div className='w-full flex flex-col gap-2'>
        <div className="w-full flex flex-col md:flex-row items-center mt-2 justify-between px-4">
        <div className="w-full md:w-[45%] flex flex-col px-2 justify-center gap-2">

     <div className="text-sm font-semibold">Blob color</div>
        <div className="w-full flex border items-center gap-2 px-2 py-[4px] shadow-sm rounded-sm">
            <input type="color" 
                className='bg-transparent border-none rounded-sm h-[25px] focus:outline-none'
                name='bg'
                onChange={onChange}
            />
            <input type="text" name="bg" onChange={onChange} className='w-full h-[30px] text-sm font-medium focus:outline-none rounded-sm' value={boxRadius.bg}/>
        </div>

        <div className="flex flex-col mt-2 gap-2">
            <div className="text-sm font-semibold">Direction</div>
            <div className="flex flex-col justify-center gap-[6px] pb-2 mt-[2px] px-2 py-2 rounded-sm shadow-sm border">
                <input type="range" value={boxRadius.rOne}  min="0" max='100' step="1" name='rOne' onChange={onChange}
                className='h-[6px] bg-indigo-950 cursor-pointer' />
            </div>

            <div className="flex flex-col justify-center gap-[6px] pb-2 mt-1 px-2 py-2 rounded-sm shadow-sm border">
                <input type="range" min="0" max='100'value={boxRadius.rTwo} step="1" name='rTwo' onChange={onChange} 
                className='h-[6px] bg-indigo-950 cursor-pointer' />
            </div>

            <div className="flex flex-col justify-center gap-[6px] pb-2 mt-1 px-2 py-2 rounded-sm shadow-sm border">
                <input type="range" min="0" max='100'value={boxRadius.rThree} step="1" name='rThree' onChange={onChange}
                className='h-[6px] bg-indigo-950 cursor-pointer' />
            </div>

            <div className="flex flex-col justify-center gap-[6px] pb-2 mt-1 px-2 py-2 rounded-sm shadow-sm border">
                <input type="range" min="0" max='100'value={boxRadius.rFour} step="1" name='rFour' onChange={onChange}
                className='h-[6px] bg-indigo-950 cursor-pointer' />
            </div>
        </div>
        
      </div>                  
      <div className="w-full md:w-[50%] h-[350px] flex items-center justify-center">
          <div className="w-[250px] h-[200px] bg-blue-300 rounded-sm" style={{backgroundColor:boxRadius.bg,borderRadius:radius}} />
      </div>
        </div>
        <div className="w-full bg-slate-100 shadow-md h-[40px] px-5 py-2 rounded-sm flex items-center justify-between">
            <div className="text-sm font-medium text-zinc-900">
                {copyRadius}
            </div>
              {isCopied?
               <MdCheck size={18} color='green' className='cursor-pointer'/>
               :
               <MdCopyAll size={20} color='blue' className='cursor-pointer' onClick={onCopy}/>}
          </div>
    </div>
  )
}

export default Blob
