"use client"

import Image from "next/image"

const SuccessStories = () => {

 

  return (
    <div className="w-full flex flex-col mt-5 mb-5">
       <div className="w-full md:w-[90%] flex flex-col md:flex-row gap-8 md:items-center mx-auto md:gap-3">
           <div className="w-full md:w-[40%] flex items-center">
                <div className="w-[80%]  md:w-[320px] md:mx-auto ring-4 ring-purple-800 h-[300px] md:h-[330px] bg-[#07051b] relative rounded-sm">
                    <div className="w-[70%] md:w-[200px] h-[200px] md:h-[200px] absolute bg-slate-100 rounded-full -right-16 -bottom-1">
                       <Image
                        fill
                        src="/success.jpg"
                        alt="testimonial"
                        priority
                        className="object-cover ring-4 rounded-sm ring-purple-900"
                       />
                    </div>
                </div>
           </div>
           <div className="md:w-[60%] w-[100%] md:pl-[70px] mt-5 md:mt-0 flex flex-col justify-between items-center md:gap-6 gap-3">
              <h1 className="text-xl font-bold md:text-4xl text-zinc-200">Success Story of <strong className="text-purple-800">tamara</strong></h1>
              <div className="w-full h-full flex flex-col gap-2">
                 <p className="text-[16px] font-normal text-zinc-300 text-center">
                     FrontendCoach has truly been a catalyst for my growth as a frontend developer, and I'm thrilled to share my success story of how this platform has made a profound impact on my journey.
                 </p>
                 <p className="text-[16px] font-normal text-zinc-300 text-center">
                     When I first stumbled upon FrontendCoach, I was a novice in the world of web development, eager to learn but unsure of where to begin. The platform's curated collection of frontend coding challenges immediately caught my eye, offering a structured and hands-on approach to mastering essential concepts. With each challenge I tackled, I felt my skills expanding, my confidence growing, and my passion for frontend development flourishing.
                 </p>
              </div>
           </div>
       </div>
    </div>
  )
}

export default SuccessStories
