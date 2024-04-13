"use client"

import { useEffect,useRef, useState } from 'react'

import {MdAdd, MdThumbUpAlt} from "react-icons/md"
import {FiDelete} from "react-icons/fi"
import {FiCode} from "react-icons/fi"
import{BiCheck} from "react-icons/bi"
import {GrPowerCycle} from "react-icons/gr"
import{MdOutlineCancel,MdOutlineContentCopy} from "react-icons/md"
import toast from 'react-hot-toast'


const Mesh = () => {

  const [colors, setColors] = useState(["#8c71c3","#5b0643","#121266","#ff5c09","#f5fcb9","#03f6dc","#073f3d"]);
  const [newHex, setNewHex] = useState("#5b0643");
  const [bgc, setBgc] = useState("#2c16ff");
  const [hsl, setHsl] = useState([]);
  const [hslArr, setHslArr] = useState([]);
  const [randomNum1, setRandomNum1] = useState([]);
  const [randomNum2, setRandomNum2] = useState([]);
  const [isRandom, setIsRandom] = useState(false);
  const [copied, setCopied] = useState(false);

  const _MAX = 100;
  const _MIN = 1;
  
 const handleColorChange=(e, index)=>{
    setIsRandom(false);
  
     const temp = [...colors]
     temp[index] = e.target.value
      setColors(temp)
   }
  
   const handleNewColor=(e)=>{
      setIsRandom(false);
      setNewHex(e.target.value)
   }
   const handleBgc=(e)=>{
    setBgc(e.target.value)
  }
  
  const randomBgc=()=>{
     const randombg = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`
     setBgc(randombg)
  }
  
  const genRandomColor =()=>{
    setIsRandom(true)
    const randomHex = colors.map(c=>(
        `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`
      ))
      setColors(randomHex);
  
      const r1  =  colors.map(c =>(GenRandomNum()));
      const r2  =  colors.map(c =>(GenRandomNum()))
      setRandomNum1(r1)
      setRandomNum2(r2)
      randomBgc()
    }
    
    const GenRandomNum =()=>{
      setIsRandom(true)
      const nums = Math.floor(Math.random() * (_MAX - _MIN + 1)) + _MIN;
      return nums;
    }

    useEffect(()=>{
        const r1  =  colors.map(c =>GenRandomNum());
        const r2  =  colors.map(c =>GenRandomNum())
        setRandomNum1(r1)
        setRandomNum2(r2)
      },[]);
    
    
     const hexToHsl =(col)=>{
       const hex = col.replace("#", "")
       
       const r = parseInt(hex.slice(0,2), 16) / 255;
       const g = parseInt(hex.slice(2,4), 16) / 255;
       const b = parseInt(hex.slice(4,6), 16) / 255;
    
       const max = Math.max(r, g, b);
       const min = Math.min(r, g, b);
    
       let h =0;
       if( max === min){
        h = 0;
       }
       else if(max === r) {
         h = 60 * ((g - b) / (max - min));
       }
       else if(max === g) {
        h = 60 * (2 + (b - r) / (max - min));
      }
      else if(max === b) {
        h = 60 * (4 + (r - g) / (max - min));
      }
      if(h < 0){
        h += 360;
      }
      const l = (max + min) / 2;
      const s = max === min ? 0 : l <= 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
      
      const hsl_color = `hsl(${Math.round(h)}, ${Math.round(s*100)}%, ${Math.round(l*100)}%)`;
      return  hsl_color;
    }
     const handleAddcolor =()=>{
      setIsRandom(false);
      const _colors = [...colors];
    
      _colors.push(newHex);
      setColors(_colors);
      let _nums1 = [...randomNum1]
      let _nums2 = [...randomNum2]
      const r1  =  GenRandomNum();
      const r2  =  GenRandomNum();
      _nums1.push(r1)
      _nums2.push(r2)
      setRandomNum1(_nums1)
      setRandomNum2(_nums2)
    }

    const handleDeleteColor =(id)=>{
        setIsRandom(false);
        const _colors = [...colors];
      
        _colors.splice(id,1);
        setColors(_colors);
      
        let _nums1 = [...randomNum1]
        let _nums2 = [...randomNum2]
        _nums1.splice(id, 1)
        _nums2.splice(id, 1)
        setRandomNum1(_nums1)
        setRandomNum2(_nums2)
      }
      
       const dragItem = useRef(null);
       const dragOverItem = useRef(null);
      
       const handleSort =()=>{
      
         setIsRandom(false);
         let _items = [...colors];
      
         const dragItemContent = _items.splice(dragItem.current, 1)[0];
      
         _items.splice(dragOverItem.current, 0, dragItemContent);
         
         dragItem.current = null;
         dragOverItem.current = null;
         setColors(_items);
      }
      
      const GenRandomMesh=()=>{
        setIsRandom(true)
           const bgImage = hsl.map((col, index)=>(
          `radial-gradient(at ${GenRandomNum()}% ${GenRandomNum()}%, ${col} 0px, transparent 50%)`
          ));
          setHslArr(bgImage)
      }
      
      const GenMesh=()=>{
        const bgImage = hsl.map((col, index)=>(
          `radial-gradient(at ${randomNum1[index]}% ${randomNum2[index]}%, ${col} 0px, transparent 50%)`
          ))
          setHslArr(bgImage)
      }
      useEffect(()=>{
      
        isRandom? GenRandomMesh() : GenMesh()
        return()=>{
           GenRandomMesh();
           GenMesh()
        }
      }, [hsl,colors])
      
      const cssCode =`background-color: ${bgc};
      background-image: ${hslArr.join(",")};`
      
      const copyToClipBoard=()=>{
            navigator.clipboard.writeText(cssCode)
            setCopied(true)
            toast.success("copied!")
            setTimeout(() => {
              setCopied(false)
            }, 500);
        
      }
      
      useEffect(()=>{
        setIsRandom(false)
        const HSL =  colors.map(c=>(
          hexToHsl(c)
        ));
        setHsl(HSL) 
        return()=>{ colors.map(c=>(
          hexToHsl(c)
        ));}   
      },[colors])

  return (
    <div className='w-full flex gap-2 mt-3 justify-center'>

       <div className="w-full md:w-[40%] flex flex-col gap-3">
            <div className="flex flex-col px-2 py-[5px] justify-center gap-1 w-full bg-slate-50 shadow-sm ring-1 rounded-sm">
                <span className='text-sm font-semibold'>Background Color</span>
                <div className="flex items-center gap-2 w-full">
                    <input type="color" value={bgc} onChange={handleBgc}
                     className='w-5 h-5 round-sm bg-transparent'
                    />
                    <span className='text-xs font-semibold'>{bgc}</span>
                </div>
             </div>
       
             <div className="flex flex-col gap-[2px] shadow-sm ring-1 w-full px-2 py-[4px] rounded-sm">
                   <span className='text-sm font-semibold'>Add Color</span>
                  <div className="flex items-center gap-2 justify-between">
                     <div className="flex items-center gap-1">
                        <input type="color" value={newHex} onChange={handleNewColor} 
                         className='w-5 h-5 rounded-sm outline-none cursor-pointer bg-transparent'
                        />
                        <span className='text-xs font-semibold'>{newHex}</span>
                     </div>
                     <button 
                      className="bg-blue-500 rounded-sm px-2 py-2 flex items-center justify-center" onClick={handleAddcolor}>
                         <MdAdd color='#fff' size={14} />
                     </button>
                  </div>
             </div>

               <div className="flex flex-col gap-1 w-full">
                    <h1 className='font-semibold text-sm'>Gradient Colors</h1>
                    <div className="w-full flex flex-col gap-2 h-[250px] overflow-y-auto px-2 py-2">
                        {colors.map((item, index)=>(
                            <div className="w-full px-2 py-2 ring-1 rounded-sm flex cursor-move items-center shadow-sm" key={index} draggable
                                    onDragStart={(e)=>(dragItem.current = index)}
                                    onDragEnter={(e)=>(dragOverItem.current = index)}
                                    onDragEnd={handleSort}
                                    onDragOver={(e)=>e.preventDefault()}
                                    >
                                    <div className="flex items-center w-full justify-between">
                                      <div className="flex items-center gap-2">
                                         <input type="color" value={item} className="w-5 bg-transparent h-5 rounded-sm outline-none cursor-pointer"
                                          onChange={(e)=>handleColorChange(e, index)}/>
                                         <span className="text-xs">{hsl[index]}</span>
                                      </div>
                                    <div className="w-5 h-5 rounded-sm p-1 bg-blue-500 cursor-pointer" onClick={()=>handleDeleteColor(index)}>
                                      <FiDelete color='#fff' size={15} className="w-full h-full" />
                                    </div>
                                  </div>
                            </div>
                        ))}
                   </div>
               </div>
         </div>

          <div className="flex flex-col justify-between w-[60%]">
            <div className="w-full h-10 rounded-sm bg-slate-50 shadow-sm flex justify-between px-2 py-1">
                <button className="bg-blue-500 px-3 py-1 rounded-sm 
                     cursor-pointer text-zinc-100 text-xs font-semibold flex items-center gap-1" onClick={genRandomColor}>
                    <GrPowerCycle size={16} color='#fff'/>
                    <span> Refresh</span>
                </button>
                {copied &&
                <div className="flex items-center justify-center text-xs font-semibold
                 text-zinc-100 bg-green-500 rounded-full px-3 gap-2 animate-bounce">
                     <MdThumbUpAlt color='#fff' size={16}/>
                     <span>Copied</span>
                </div>}
                <div className="flex items-center gap-2">
                  <span 
                    className='select-none py-1 px-3 rounded-full bg-black text-xs font-semibold text-white'>
                    Click here to copy
                  </span>
                    <span onClick={copyToClipBoard} className="cursor-pointer ">
                      <FiCode size={16} color='blue'/>
                    </span>
                </div>
            </div>
             <div className="h-[350px] w-full rounded-sm"style={{backgroundImage:hslArr.join(","),backgroundColor:bgc}}/>
           </div>
    </div>
  )
}

export default Mesh
