"use client"

import Link from "next/link";

const Footer = () => {

    const today = new Date();
    const thisYear = today.getFullYear();

  return (
    <footer
     className="w-full"
    >
       <div className="w-full px-6 py-2 flex flex-col md:flex-row gap-2 items-center md:justify-between">
          <div className="flex items-center gap-2 text-zinc-300">
             <h1 className="font-bold text-xl">frontendcoach</h1>
             <h1 className="text-sm font-semibold mt-[5px]">{thisYear}.</h1>
             <h1 className="text-sm mt-[5px]">All rights reserved</h1>
          </div>
          <div className="flex items-center gap-5 text-zinc-300">
              <Link href='/terms' className="font-medium text-sm">Terms of use</Link>
              <Link href='/privacy-policy' className="font-medium text-sm">Privacy Policy</Link>
          </div>
          <div className="flex flex-col items-center gap-[3px]">
             <h1 className="font-bold text-xl text-zinc-300">follow us</h1>
             <div className="flex item-center gap-2 text-zinc-300">
                <Link href="https://twitter.com/victorvict20488" className="font-medium text-sm">Twitter</Link>
             </div>
          </div>
       </div>
    </footer>
  )
}

export default Footer
