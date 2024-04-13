"use client"

import useModalStore from '@/lib/modal-store'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment} from 'react'

import ImageList from './image-list'

import { MdCancel } from 'react-icons/md'


const ImageModal = () => {


 const{modalType, isOpen,onClose}  = useModalStore()
 const open = (isOpen && modalType === "images");

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
                <Dialog.Panel className="w-full max-w-[780px] h-[90vh] md:h-[85vh] overflow-y-auto
                 transform overflow-hidden rounded-sm bg-white px-2 py-2 text-left
                  align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-sm font-bold w-full py-2 border-b-2 pb-1 text-gray-900 flex flex-col gap-1"
                  >
                    <div className="w-full relative">
                        <MdCancel color='black' size={20} className='absolute -right-[4px] -top-[12px] cursor-pointer'
                         onClick={onClose}
                         />
                    </div>
                   <h1 className='text-xl font-bold ml-2'>
                     <strong className='text-sm font-bold text-purple-950'>Images</strong>
                   </h1>
                  </Dialog.Title>
                  <div className="w-full">
                     <ImageList/>
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

export default ImageModal
