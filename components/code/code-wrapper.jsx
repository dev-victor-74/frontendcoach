"use client"

import clsx from 'clsx';
import CodeSidebar from './sidebar';
import { useSidebarStore } from '@/lib/sidebar-store';

const CodeWrapper = ({children, user}) => {
  
const{isOpen} = useSidebarStore();

  return (
    <div className='h-screen w-full overflow-hidden bg-cyan-900'>
    <div className="flex w-full h-screen items-center overflow-hidden">
         <CodeSidebar user ={user}/>
         <div className={clsx("w-full h-screen bg-black overflow-hidden", isOpen ? "pl-[45px]":"pl-[0px]")}>
             {children}
         </div>
    </div>
 </div>
  ) 
}

export default CodeWrapper;