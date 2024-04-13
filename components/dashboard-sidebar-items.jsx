"use client"

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

const DashboardSidebarItems = ({ label, href, icon}) => {

    const pathname = usePathname();

  return (
    <div 
         className={clsx("px-[2px] cursor-pointer py-[7px] flex gap-[2px] rounded-[5px] hover:bg-[#0a0c22f5]",pathname === href &&" bg-[#0a0c22f5]")}>
          {pathname === href && <div className="h-[85%] px-[2px] rounded-[1px] self-center bg-slate-300/100"/>}
           <Link href={href} className="w-full flex items-center gap-[6px]">
            <div className="">
               {icon}
            </div>
              <div className="">
                <span className='text-sm font-semibold tracking-wide'>{label}</span>
              </div>
           </Link>
    </div>
  )
}

export default DashboardSidebarItems
