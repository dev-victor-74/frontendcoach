"use client"

import useModalStore from "@/lib/modal-store";
import { Transition,Dialog } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { Fragment, useState } from "react";
import { MdCancel } from "react-icons/md";


const ChallengeModal = () => {
 
  const [scale, setScale] = useState(0.9);
  const{isOpen, modalType, onClose,modalData } = useModalStore();
  const modalOpen = (isOpen && modalType === "challenge-modal");

    const handleZoomIn = () => {
      setScale(scale + 0.05);
    };
  
    const handleZoomOut = () => {
      setScale(scale - 0.05);
    };
    
  return (
    <>
    <Transition appear show={modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white/75 "/>
        </Transition.Child>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

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
              <Dialog.Panel className="w-full md:max-w-[1070px] h-[50vh] md:h-[80vh] overflow-y-auto
               transform overflow-hidden rounded-md bg-gray-200 px-1 py-2 text-left
                align-middle shadow-xl transition-all relative">
                <div className="w-full ">
                        <MdCancel color='black' size={20} className='absolute right-[4px] top-[2px] cursor-pointer text-zinc-950'
                         onClick={onClose}
                        />
                    </div>
                <div className="w-full py-4 flex flex-col rounded-sm bg-gray-200 gap-2 h-full items-center ">
                    <div className="w-full py-2 overflow-auto max-w-[1050px] h-[85vh] rounded-md bg-gray-200 select-none">
                      <Image
                        src={modalData}
                        alt="image"
                        priority
                        width={1000}
                        height={200}
                        layout='responsive'
                        className="object-fill rounded-sm"
                        style={{transform:`scale(${scale})`}}
                      />
                    </div>
                    <div className="w-full max-w-[1035px] rounded-sm flex gap-3 mt-2 mx-auto px-2 items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-8">
                       <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-zinc-900">Zoom</span>
                        <button
                         className={clsx("bg-blue-400 font-semibold text-lg rounded-sm px-3 flex items-center justify-center",scale >= 1 && "cursor-not-allowed bg-blue-400")}
                         onClick={handleZoomIn}
                         disabled={scale >= 1}
                         >+</button>
                        <button
                         className="bg-blue-400 font-semibold text-lg px-3 rounded-sm flex items-center justify-center"
                        onClick={handleZoomOut}>-</button>
                      </div>
                     
                      </div>
                      </div>
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

export default ChallengeModal
