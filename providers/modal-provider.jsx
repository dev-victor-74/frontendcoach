"use client"

import { useEffect, useState } from "react";

import ImageModal from "@/components/codemodals/image-modal";
import ToolsModal from "@/components/codemodals/tools-modal";
import ColorModal from "@/components/codemodals/color-modal";
import ProModal from "@/components/modals/Pro-modal";
import ChallengeModal from "@/components/modals/challenge-modal";
import ImagesModal from "@/components/modals/Asset-modal";


const ModalProvider = () => {
 
  const[isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
  },[])

  if(!isMounted){
    return null;
  }


  return (
    <>
     <ToolsModal/>
     <ImageModal/>
     <ColorModal/>
     <ProModal/>
     <ChallengeModal/>
     <ImagesModal/>
    </>
  )
}

export default ModalProvider
