"use client"

import { useReducer, useState } from "react";
import {getStorage, ref, getDownloadURL, uploadBytes} from "firebase/storage";

import { INITIAL_STATE, challengeReducer } from "@/lib/challenge-reducer";
import { app } from "@/app/utils/firebase";
import axios from "axios";
import clsx from "clsx";

import { MdCancel } from "react-icons/md";
import { ImSpinner3 } from "react-icons/im";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const AddChallengeForm = () => {
  const[loading ,setLoading] = useState(false);
  const[media ,setMedia] = useState("");
  const[dMedia ,setDmedia] = useState(null);
  const[mMedia ,setMmedia] = useState(null);
  const router = useRouter();

  
  const[skil, setSkil]=useState("");
  const[task, setTask]=useState("");

  const[disp, setDisp]=useState(null);
  const[desk, setDesk]=useState(null);
  const[mob, setMob]=useState(null);

  const[dispLoading, setDispLoading]=useState(false);
  const[dLoading, setdLoading]=useState(false);
  const[mLoading, setmLoading]=useState(false);

  const[dispError, setDispError]=useState(false);
  const[dError, setdError]=useState(false);
  const[mError, setmError]=useState(false);

  
  const[state, dispatch] = useReducer(challengeReducer, INITIAL_STATE);
  console.log(state)

  const handleChange=(e)=>{
     dispatch({type:"CHANGE_INPUT",payload:{name:e.target.name, value:e.target.value}})
     }
 
   const handleSkill=()=>{
      dispatch({type:"ADD_SKILL",payload:skil});
      setSkil("")
     } 
   
  
 
     const handleFileUpload = async (file) => {

        const name = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, `images/${name}`);
      
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    };
     
      const upsingle=async()=>{
        try {
          setDispLoading(true);
          const u = await handleFileUpload(disp);
          setMedia(u);
          toast.success("uploaded display image!");
        } catch (error) {
          setDispError(true);
          toast.error("failed to upload display image");
        }finally{
          setLoading(false);
        }
      }

     const upDesk=async()=>{
       try {
        setdLoading(true);
        const u = await handleFileUpload(desk);
        setDmedia(u);
        toast.success("uploaded desktop image");

      } catch (error) {
        setdError(true);
        toast.error("failed to upload desktop image")
      }finally{
         setdLoading(false);
      }
      }

     const upMob= async()=>{
       try {
        setmLoading(true);
        const u = await handleFileUpload(mob);
        setMmedia(u);
        toast.success("uploaded mobile image");
        
      } catch (error) {
        setmError(true);
        toast.error("failed to upload mobile image")
      }finally{
        setmLoading(false);
      }
      }

    const handleImageUpload=()=>{
        dispatch({type:"ADD_IMAGES",
         payload:{
          displayImg:media,
          desktopImgs:dMedia,
          mobileImgs:mMedia
         }
        })
    } 

    const onSubmit=async()=>{
        setLoading(true);
       try {
         const res = await axios.post("/api/challenges/add", JSON.stringify(state))
         console.log(res)
         toast.success("challenge submitted sucessfully!")
        } catch (error) {
          console.log(error)
          toast.error("failed to submit challenge")
        }
       finally{
         router.refresh();
        setLoading(false)
       }
    }

  return (
    <div className="w-full h-full flex flex-col md:flex md:flex-row gap-3 md:gap-5">
        <div className="w-full md:w-1/2 flex flex-col gap-3 px-1 md:px-0">

            <div className="flex flex-col gap-1">
                 <label className='text-[16px] font-bold'>Challenge Name</label>
                 <input type="text" name="name" onChange={handleChange} 
                  placeholder='Enter challenge name'
                  className='rounded-sm text-sm placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50' />
            </div>

            <div className="flex flex-col gap-1">
                 <label className='text-[16px] font-bold'>Challenge Level</label>
                <select name="level" onChange={handleChange} 
                  className='rounded-sm text-sm placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50'>
                     <option value="">Select an option</option>
                     <option value="Beginner">Beginner</option>
                     <option value="Intermediate">Intermediate</option>
                </select>
            </div>
            {/* IMAGES */}
             <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center justify-between">
                    <label htmlFor="disp" className='text-[14px] bg-black text-zinc-300
                       w-full py-2 px-2 rounded-sm cursor-pointer
                      font-semibold'>Display Image</label>
                    <input className='ring-1 px-1 py-1 rounded-sm w-full ' 
                     type="file" id='disp' accept='image/*' onChange={(e)=>setDisp(e.target.files[0])} />
                      <button onClick={upsingle}
                     className="w-full justify-center text-sm font-semibold bg-blue-800 flex items-center px-2 py-2 rounded-sm text-white">
                        Upload
                      </button>
                  </div>

                <div className="flex items-center gap-2 justify-between">
                    <label htmlFor="desktop" className='text-[14px] bg-black text-zinc-300
                      w-full py-2 px-2 rounded-sm cursor-pointer
                      font-semibold'>Desktop Images</label>
                    <input className='ring-1 px-1 py-1 rounded-sm w-full' 
                     type="file" id='desktop' accept='image/*'onChange={(e)=>setDesk(e.target.files[0])}/>
                   <button onClick={upDesk} 
                     className="w-full text-sm flex justify-center bg-blue-800 items-center font-semibold px-2 py-2 rounded-sm text-white">
                       Upload
                    </button>
                </div>

                <div className="flex items-center gap-2 justify-between">
                    <label htmlFor="mobile" className='text-[14px] bg-black text-zinc-300
                      w-full py-2 px-2 rounded-sm cursor-pointer
                      font-semibold'>Mobile Images</label>
                    <input className='ring-1 px-1 py-1 rounded-sm w-full'
                      type="file" id='mobile' accept='image/*' onChange={(e)=>setMob(e.target.files[0])}/>
                    <button onClick={upMob} className={clsx("w-full text-sm justify-center font-semibold px-2 py-2  rounded-sm text-white bg-blue-800 flex items-center")}>
                      Upload
                    </button>
                </div>
                <button
                    onClick={handleImageUpload}
                    className='px-3 w-full font-semibold text-zinc-200 text-sm
                     text-center rounded-sm py-2 bg-blue-800'
                    type='button'>
                    Upload
                </button>
             </div>

             <div className="flex flex-col gap-1 mt-2">
                 <label className='text-[16px] font-bold'>Challenge Type</label>
                <select name="challengeType" onChange={handleChange}
                  className='rounded-sm text-sm placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50'>
                     <option value="">Choose challenge Type</option>
                     <option value="Free">Free</option>
                     <option value="Pro">Pro</option>
                </select>
            </div>

            <div className="flex flex-col gap-1 mt-2">
                 <label className='text-[16px] font-bold'>Type</label>
                <select name="type" onChange={handleChange}
                  className='rounded-sm text-sm placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50'>
                     <option value="">Choose challenge Type</option>
                     <option value="Singlepage">SinglePage</option>
                     <option value="Card">Card</option>
                     <option value="Series">Series</option>
                </select>
            </div>
            {state.type === "Series" &&
              <div className="flex flex-col gap-1">
                <label className='text-[16px] font-bold'>Series Name</label>
                <input type="text" name="seriesName" onChange={handleChange}  
                className='rounded-sm text-sm w-full placeholder:text-sm placeholder:font-normal
                font-semibold px-2 ring-1
                focus:shadow-sm outline-none py-3 bg-slate-50' />
              </div>
            }

            <div className="flex flex-col gap-1 mt-3">
                 <label className='text-[16px] font-bold'>Difficulty Level</label>
                <select name="difficultyLevel" onChange={handleChange}  
                  className='rounded-sm text-sm placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50'>
                     <option value="">Select difficulty level</option>
                     <option value="EASY">Easy</option>
                     <option value="MEDIUM">Medium</option>
                     <option value="HARD">Hard</option>
                </select>
            </div>

            <div className="flex flex-col gap-1">
                 <label className='text-[16px] font-bold'>Challenge Number</label>
                 <input type="number" name="challengenum" onChange={handleChange}  
                  className='rounded-sm text-sm w-1/4 placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50' />
            </div>
            <div className="flex flex-col gap-1">
                 <label className='text-[16px] font-bold'>Challenge points</label>
                 <input type="number" name="points" onChange={handleChange}  
                  className='rounded-sm text-sm w-1/4 placeholder:text-sm placeholder:font-normal
                  font-semibold px-2 ring-1
                  focus:shadow-sm outline-none py-3 bg-slate-50' />
            </div>

            <div className="flex flex-col gap-1">
                 <label className='text-[16px] font-bold'>skills Required</label>
                 <div className="flex items-center gap-2 w-full justify-between">
                 <input type="text"
                    placeholder='skill 1'
                     value={skil}
                    onChange={e=>setSkil(e.target.value)}
                    className='rounded-sm text-sm w-1/4 placeholder:text-sm placeholder:font-normal
                    font-semibold px-2 ring-1
                    focus:shadow-sm outline-none py-3 bg-slate-50' />
                     <button onClick={handleSkill} className="w-1/2 px-2 py-2 bg-blue-700 rounded-sm text-zinc-100 text-sm 
                      font-semibold active:bg-blue-600">Add Skill</button>
                  </div>
            </div>

        </div>


        <div className="gap-4 w-full md:w-1/2 flex flex-col px-1 md:px-0">
            <div className="w-full px-1 flex flex-col gap-2 mt-2">

                <div className="w-full flex flex-col justify-center gap-2">
                <div className="text-[16px] font-semibold">Skills Required</div>
                    {/* TODO */}
                  <div className="flex items-center w-full gap-2">
                    {state.skillsRequired.map((skill,i)=>(
                      <div key={i} className="w-full h-10 py-1 px-2 rounded-sm
                         text-sm font-semibold flex items-center shadow-sm bg-slate-100 justify-between">
                           {skill}
                          <MdCancel size={18} className="cursor-pointer" 
                           onClick={()=>dispatch({type:"REMOVE_SKILL",payload:skill})}/>
                         </div>
                      ))}
                    </div>
                </div>

            </div>
             
            <button
              onClick={onSubmit}
              className='w-full px-2 py-3 rounded-sm bg-blue-800 mt-3 md:mt-16 font-semibold text-sm text-zinc-300'
              >
              {loading ?<ImSpinner3 size={24} color="#fff" className="animate-spin mx-auto"/>:
              "Create Challenge"}
            </button>
        </div>
     </div>
  )
}

export default AddChallengeForm
