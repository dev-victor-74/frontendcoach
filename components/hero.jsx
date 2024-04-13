import Link from "next/link"

const Hero = () => {
  return (
    <section className='w-[90%] md:w-[80%] m-auto flex items-center justify-center flex-col'>
      <div className=" flex flex-col items-center gap-5">
         <h1 className='text-slate-100 font-bold text-3xl md:text-6xl text-center'>
            The <strong className="text-purple-700">Best</strong> Place to <strong className="text-purple-700">Practice</strong> <strong className="text-3xl">&</strong> <strong className="text-purple-700">Build</strong> Frontend <strong className="text-purple-700">Projects</strong> 
         </h1>
         <div className="w-[80%] md:w-[60%] mx-auto"> 
          <div className='
           flex  gap-2 flex-col
            font-semibold text-xl text-slate-500 items-center justify-center
            '>
               <p
                className="text-sm font-semibold text-zinc-300 text-center"
               >Improve your coding skills by building challenge based projects</p>
               <div className="font-bold text-zinc-400 mt-2 text-center">
                  Join over 2000+ Developers supercharging their coding skill with our carefully crafted challenges tailored to make you grow
               </div>
         </div>
      </div>
      </div>
        <Link href="/auth/sign-in">
            <button className='
               px-10 flex items-center justify-center py-4
               bg-[#2124af] ring-2 ring-purple-800
               rounded-md text-sm text-white mt-5 
               font-semibold
               '>
               Get Started
            </button>
        </Link>
    </section>
  )
}

export default Hero