
"use client"

import useModalStore from "@/lib/modal-store";

import { Transition,Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";

import useSWR from "swr";
import axios from "axios";

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "@/app/utils/firebase";

import { MdCancel } from "react-icons/md";
import { ImSpinner3 } from "react-icons/im";


const ImagesModal

 = () => {


  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [url, setUrl] = useState(null);
  const{isOpen, onClose,modalType} = useModalStore();

  const modalOpen =(isOpen && modalType ==="add-images")

  const handleFileUpload = async (fil) => {
    if(fil === undefined||!fil){
      return null;
    }
   const name = new Date().getTime() + fil.name;
   const storage = getStorage(app);
   const storageRef = ref(storage, `images/${name}`);
   await uploadBytes(storageRef, fil);
   const imageUrl = await getDownloadURL(storageRef);
   return imageUrl;
 };
//  console.log(cat)

 const prepareUpload= async()=>{
  try {
    setLoading(true);
    if(!file) return null;
    const a =  await handleFileUpload(file);
    setUrl(a)
    console.log(url)
    
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false);
    setFile(null);
  }
 }
 const fetcher=async(address)=>{
    await axios.get(address)
 }

 const{data, isLoading} = useSWR("",fetcher)

const onSubmit=async()=>{
  try {
    setLoading(true);
    
   const res = await axios.post("/api/assets", {url,name})
   console.log(res)
  } catch (error) {
   
    console.log(error)
    
  }
  finally{ setLoading(false)}
}


    
  return (
    <>
    <Transition appear show={modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50"onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/85 "/>
        </Transition.Child>
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[850px] h-[90vh] overflow-y-auto
               transform overflow-hidden rounded-sm bg-white px-3 py-2 text-left
                align-middle shadow-xl transition-all relative">
                    <div className="w-full ">
                        <MdCancel color='black' size={20} className='absolute right-[4px] top-[2px] cursor-pointer'
                            onClick={onClose}
                        />
                        <h1 className="font-bold text-2xl text-zinc-900">Images</h1>
                    </div>
                    <div className="w-full flex items-center mt-1 justify-between">
                       <div className="flex items-center gap-2">
                          <label htmlFor="images" className="px-5 cursor-pointer py-[7px] rounded-sm text-sm  text-zinc-200 bg-black">select files</label>
                          <input type="file" onChange={e=>setFile(e.target.files[0])} accept="image/*" id="images"  className="px-2 hidden py-[2px] outline-none ring-1 rounded-sm w-[200px]"/>
                          <input type="text" value={name} placeholder="image label" onChange={e=>setName(e.target.value)} id="images"  className="px-2 hidden sm:flex md:flex py-[2px] outline-none ring-1 rounded-sm w-[200px]"/>
                        </div> 
                        <div className="flex items-center gap-3"> 
                          <button onClick={prepareUpload} disabled={!file} className="px-2 w-[150px] text-zinc-200 py-[6px] disabled:cursor-not-allowed rounded-sm bg-blue-700 font-semibold text-sm">
                            {
                            loading ? <ImSpinner3 size={20} color="#fff" className="animate-spin mx-auto"/> :
                            "upload"}
                          </button>
                          <button disabled={!file || !name} onClick={onSubmit} className="px-2 w-[150px] text-zinc-200 py-[6px] disabled:cursor-not-allowed rounded-sm bg-blue-700 font-semibold text-sm">create</button>
                      </div>
                    </div>
                    <div className="mt-2 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                       
                    </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
  )
}

export default ImagesModal
