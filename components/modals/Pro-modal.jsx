"use client"

import useModalStore from "@/lib/modal-store";
import { Transition,Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { BsFillLightningChargeFill} from "react-icons/bs";
import { MdCancel } from "react-icons/md";


const ProModal = () => {
 
    const{isOpen, modalType, onClose} = useModalStore();
    const router = useRouter();
    const modalOpen = (isOpen && modalType === "pro-modal");

    const onClick=()=>{
      router.push("/pricing");
      onClose();
    }
    
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
              <Dialog.Panel className="w-full max-w-[500px] h-[40vh] md:h-[35vh] overflow-y-auto
               transform overflow-hidden rounded-sm bg-white px-2 py-1 text-left
                align-middle shadow-xl transition-all relative">
                   <div className="w-full ">
                        <MdCancel color='black' size={20} className='absolute right-[4px] top-[2px] cursor-pointer'
                         onClick={onClose}
                        />
                    </div>
                <div className="w-full py-[2px] flex flex-col gap-2 h-full items-center justify-center">
                   <div className="w-full flex items-center justify-center">
                      <AiOutlineWarning className="text-rose-600" size={40} />
                   </div>

                    <p
                      className="font-medium text-[18px] text-center"
                    >You are on a Free plan, you cannot take this challenge,upgrage your account to <strong className="px-2 py-1 text-zinc-300 rounded-full bg-orange-800" id="upgrade2">Pro</strong> and get access all challenges</p>

                  <div className="w-full items-center justify-center px-5">
                      <button
                      onClick={onClick}
                      className="mx-auto mt-3 py-2 text-sm font-semibold 
                      w-full rounded-full text-zinc-200 flex items-center justify-center gap-2 hover:opacity-90" 
                      id="upgrade2">
                        <span>Upgrade Now!</span>
                       <BsFillLightningChargeFill
                          color="lime"
                          size={16}
                          className="animate-bounce"
                      />
                      </button>
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

export default ProModal
