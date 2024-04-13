"use client"

import Image from "next/image"

const Intro = () => {

    const madeFor = [
        {
            id:1,
            imgSrc:"/bbbb.png",
            label:"Beginners",
            description:`The challenges offered by FrontendCoach cover a range of difficulty levels, allowing users to gradually improve their skills as they progress. From basic HTML and CSS tasks to more advanced JavaScript and frontend challenges, users can choose challenges that match their current skill level and gradually advance to more complex problems.`
        },
        {
            id:2,
            imgSrc:"/stds.png",
            label:"Students",
            description:`The platform offers practical coding challenges that allow users to apply theoretical knowledge in a real-world context. This hands-on experience is crucial for students as it reinforces learning and helps them develop problem-solving skills, a critical aspect of becoming proficient in web development.`
        },
        {
            id:3,
            imgSrc:"/prff.png",
            label:"Developers",
            description:` For developers looking to strengthen their frontend skills, FrontendCoach offers a curated set of challenges spanning various difficulty levels. These challenges cover fundamental concepts as well as advanced topics, enabling developers to enhance their proficiency in HTML, CSS, JavaScript, and frontend frameworks.`
        },
    ]

  return (

    <section className="w-full md:w-[90%] lg:w-[85%] flex flex-col items-center py-4 gap-4">
        <div className="w-[95%] md:w-[70%] mt-2">
            <h1
            className="text-center text-3xl md:text-5xl font-bold text-zinc-200"
            >Boost your coding skill by building real life challenges</h1>
         </div>
         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
             {
                madeFor.map(m=>(
                    <div key={m?.id} className="bg-[#18143d] rounded-md ring-2 ring-purple-800 flex flex-col px-3 py-2 pb-4 gap-3">
                        {/* <div className="w-full h-[220px] relative">
                           <Image
                             src={m.imgSrc}
                             fill
                             priority
                             sizes="200px 220px"
                             alt={m.label}
                           />
                        </div> */}
                        <h2 className="text-2xl font-bold text-center mt-1 text-zinc-300">{m?.label}</h2>
                        <div className="w-full">
                            <p className="text-sm font-medium text-gray-400 text-center">{m?.description}</p>
                        </div>
                    </div>
                ))
             }
         </div>
         
    </section>
  )
}

export default Intro
