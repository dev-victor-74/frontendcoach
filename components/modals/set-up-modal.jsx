"use client"

import { Transition,Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import SetupModal from "../setup-modal";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const SetUpModalProvider
 = ({show}) => {


  const [level, setLevel] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [Open, setOpen] = useState(show)

  const router = useRouter();
  const session = useSession();

  const handleLevel =(value)=>{
    setLevel(value)
  }

  const onClose=()=>{
    setOpen(false)
  }

  const name = session?.data?.user?.name;

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      setIsLoading(true)
      const user =  await axios.post("/api/users/settings", JSON.stringify(level));
      toast.success("operation successfull")
    } catch (error) {
      toast.error("operation failed!")
    }finally{
      setIsLoading(false)
      router.refresh()
      onClose()
    }
  }  
    
  return (
    <>
    <Transition appear show={Open} as={Fragment}>
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
              <Dialog.Panel className="w-full max-w-[600px] md:h-[50vh] overflow-y-auto
               transform overflow-hidden rounded-md bg-white px-2 py-2 text-left
                align-middle shadow-xl transition-all relative">
                  <SetupModal
                   level = {level}
                   handleLevel ={handleLevel}
                   handleSubmit ={handleSubmit}
                   isLoading ={isLoading}
                   name = {name}
                  />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
  )
}

export default SetUpModalProvider
