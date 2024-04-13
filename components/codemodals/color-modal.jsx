"use client"

import useModalStore from '@/lib/modal-store'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { useToolsSwitch } from '@/lib/sidebar-store'
import clsx from 'clsx'
import { MdCancel } from 'react-icons/md'
import Palettes from './palettes'
import Gradients from './gradients'
import Mesh from './mesh'

const ColorModal = () => {

const{isPalette,isGradient,isMesh,onPalette,onGradient,onMesh} = useToolsSwitch();

 const{modalType, isOpen,onClose}  = useModalStore()
 const open = (isOpen && modalType === "colors");

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
                <Dialog.Panel className="w-full max-w-[780px] h-[80vh] md:h-[85vh] overflow-y-auto
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
                        onClick={onPalette}
                        className={clsx('w-full rounded-sm text-sm font-semibold hover:text-zinc-200 hover:bg-blue-400 py-1 text-black',isPalette && "bg-blue-500 text-zinc-100")}>Color Palettes</button>
                        <button 
                        onClick={onGradient}
                        className={clsx('w-full rounded-sm text-sm font-semibold hover:text-zinc-200 hover:bg-blue-400 py-1 text-black',isGradient && "bg-blue-500 text-zinc-100")}>Gradients</button>
                        <button 
                        onClick={onMesh}
                        className={clsx('w-full rounded-sm text-sm font-semibold hover:text-zinc-200 hover:bg-blue-400 py-1 text-black',isMesh && "bg-blue-500 text-zinc-100")}>Mesh Gradient</button>
                    </div>

                  </Dialog.Title>
                  <div className="w-full px-1">
                    {isPalette?
                      <Palettes/>
                      :
                      isGradient?
                      <Gradients/>
                      :
                     isMesh?
                     <Mesh/>
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

export default ColorModal
