"use client"

import useModalStore from '@/lib/modal-store'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import BoxShadow from './box-shadow'
import { useToolsSwitch } from '@/lib/sidebar-store'
import clsx from 'clsx'
import Blob from './blob'
import Glass from './glass'
import { MdCancel } from 'react-icons/md'


const ToolsModal = () => {

const{isBox,isBlob, isGlass, onBox,onBlob,onGlass} = useToolsSwitch();

 const{modalType, isOpen,onClose}  = useModalStore()
 const open = (isOpen && modalType === "tools");

  return (
    <>
      <Transition appear show={open} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-[780px] h-[85vh] md:h-[85vh] overflow-y-auto
                 transform overflow-hidden rounded-sm bg-white px-2 py-2 text-left
                  align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-sm font-bold w-full py-2 border-b-2 pb-1 text-gray-900 flex flex-col items-center gap-1"
                  >
                    <div className="w-full h-[10px] relative">
                        <MdCancel color='black' size={20} className='absolute -right-[4px] -top-[12px] cursor-pointer'
                         onClick={onClose}
                        />
                    </div>
                    <div className="w-full flex items-center gap-2">
                        <button 
                        onClick={onBox}
                        className={clsx('w-full rounded-sm text-sm font-semibold hover:text-zinc-200 hover:bg-blue-400 py-1 text-black',isBox && "bg-blue-500 text-zinc-100")}>Box shadow</button>
                        <button 
                        onClick={onBlob}
                        className={clsx('w-full rounded-sm text-sm font-semibold hover:text-zinc-200 hover:bg-blue-400 py-1 text-black',isBlob && "bg-blue-500 text-zinc-100")}>Blob Generator</button>
                        <button 
                        onClick={onGlass}
                        className={clsx('w-full rounded-sm text-sm font-semibold hover:text-zinc-200 hover:bg-blue-400 py-1 text-black',isGlass && "bg-blue-500 text-zinc-100")}>Glassmorphism</button>
                    </div>

                  </Dialog.Title>
                  <div className="w-full">
                    {isBox?
                      <BoxShadow/>
                      :
                      isBlob?
                      <Blob/>
                      :
                     isGlass?
                     <Glass/>
                     :
                     null
                    }
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

export default ToolsModal
