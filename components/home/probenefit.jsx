"use client"

import Image from "next/image"

const ProBenefit = () => {

    const madeFor = [
        {
            id:1,
            imgSrc:"/port.png",
            label:"Portfolio",
            description:`Completing challenges on FrontendCoach allows you to build a portfolio showcasing your expertise and problem-solving capabilities. A strong portfolio not only serves as a testament to your skills but also enhances your credibility when seeking job opportunities or freelance projects.`
        },
        {
            id:2,
            imgSrc:"/comm.png",
            label:"Code Editor",
            description:`With the in-browser code editor, users can access coding challenges and write code within the same platform, creating a seamless and integrated environment. This eliminates the need to switch between different applications or environments, streamlining the coding experience.`
        },
        {
            id:3,
            imgSrc:"/port.png",
            label:"Css Tools",
            description:` FrontendCoach's CSS code tools like the color generator, glassmorphism generator, and gradient generator provide users with intuitive interfaces, customization options  empowering you to enhance the visual appeal and functionality of your frontend projects efficiently. These tools streamline the design process, promote creativity, and enable you to achieve professional-looking results without extensive manual coding or design expertise.`
        },
        {
            id:4,
            imgSrc:"/comm.png",
            label:"Supportive Community",
            description:`FrontendCoach fosters a vibrant community of frontend developers where individuals can connect, collaborate, and share knowledge. Engaging with the community enables developers to exchange ideas, seek assistance, and network with like-minds.`
        },
    ]

  return (

    <section className="w-full flex flex-col items-center py-4 gap-4 mt-8">
        <div className="w-[95%] md:w-[70%] flex flex-col gap-3 mt-8">
            <h1
            className="text-center text-3xl md:text-5xl font-bold text-zinc-200"
            >Upgrade to <strong id="upgrade2" className="px-3 text-center text-zinc-300 py-[2px] rounded-full text-3xl">Pro</strong> and enjoy seamless access
            </h1>
            <p 
             className="text-center text-xl font-semibold text-zinc-200"
            >invest in your coding journey with 
                <strong className="px-3 text-zinc-300 py-1 rounded-full text-xl ml-1" id="upgrade2">Pro</strong></p>
         </div>
         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4 mt-5 mb-5">
             {
                madeFor.map(m=>(
                    <div key={m?.id} className="bg-[#18143d] ring-2 ring-purple-800 rounded-md shadow-md flex flex-col gap-2 px-4 py-6">
                        {/* <div className="w-full h-[230px] relative">
                        <Image
                             src={m.imgSrc}
                             fill
                             priority
                             sizes="200px 220px"
                             alt={m.label}
                           />
                        </div> */}
                        <h2 className="text-2xl font-bold text-center text-zinc-200">{m?.label}</h2>
                        <div className="w-full">
                            <p className="text-sm font-medium text-gray-400 text-center mt-1">{m?.description}</p>
                        </div>
                    </div>
                ))
             }
         </div>
         
    </section>
  )
}

export default ProBenefit
