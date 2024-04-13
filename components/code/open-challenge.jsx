"use client"

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";



const OpenChallenge = ({id,challenge}) => {


    const [scale, setScale] = useState(1);

  return (
    <div className={clsx('w-full max-w-[900px] h-full px-1 py-1 bg-slate-500 overflow-y-auto mx-auto',)} id={id}>
        <Image
            src={challenge?.desktopImgs}
            alt={challenge?.name}
            priority
            width={1000}
            height={200}
            layout='responsive'
            className="object-fill rounded-sm"
            style={{transform:`scale(${scale})`}}
        />
    </div>
  )
}

export default OpenChallenge
