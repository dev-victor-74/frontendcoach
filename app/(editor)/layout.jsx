
"use client"

import clsx from 'clsx';
import { useSidebarStore } from '@/lib/sidebar-store';
import CodeSidebar from '@/components/code/sidebar';

const CodeLayout = ({children}) => {
   
const{isOpen} = useSidebarStore();


  return (
      // <CodeWrapper children={children} user={user}/>
      <div className='h-screen w-full overflow-hidden bg-cyan-900'>
    <div className="flex w-full h-screen items-center overflow-hidden">
         <CodeSidebar/>
         <div className={clsx("w-full h-screen bg-black overflow-hidden", isOpen ? "pl-[45px]":"pl-[0px]")}>
             {children}
         </div>
    </div>
 </div>
  )
}

export default CodeLayout
