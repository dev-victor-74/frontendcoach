import Image from 'next/image';
import clsx from 'clsx';

import DashboardSidebarItems from './dashboard-sidebar-items';
import { links } from '@/lib/dashboard_links';

import UpgradeBtn from './dashboard-components/upgrade-btn';
import LogoutBtn from './logout-btn';
import { getCurrentUser } from '@/app/utils/actions/get-current-user';
import Portfolio from './dashboard-components/portfolio';
import CreditCard from './dashboard-components/credit-card';
import { UserPlan } from '@prisma/client';
import Link from 'next/link';



const DashboardSidebar = async() => {

   const currentUser = await getCurrentUser();
 
   const credit = currentUser?.Userapilimit || {};


  return (
    <aside className='flex flex-col
       items-center w-full h-full
       relative
    '>
       <div className="w-full px-4 py-3 flex items-center gap-3">
         <Link href="/" className='w-full flex items-center gap-2'>
          <div className="w-8 h-8
                 ring-4 ring-purple-800 bg-blue-900
                 rounded-full cursor-pointer
                 overflow-hidden
                 "
                 >
            
          </div>
          <h2 className={clsx('text-zinc-100 font-bold text-2xl')}>frontendcoach</h2>
         </Link>
       </div> 
       <div className="w-full pl-4 pr-2 mt-6 text-zinc-300 flex flex-col gap-1">
          { links.map(link=>(
             <DashboardSidebarItems
               key={link.id}
               label={link.label}
               href={link.href}
               icon={<link.Icon size={18}/>}
             />
          ))
          }
          <Portfolio id ={currentUser?.id}/>
       </div>
       <div 
          className="
          absolute
          bottom-6
          right-5
          left-5 
          rounded-[5px]
          py-4
          px-2
          flex
          flex-col
          item-center
          justify-center
          bg-gray-100/10"
          id='upgradeContainer'
          >
         { (credit?.plan === UserPlan.Free) ?
          <UpgradeBtn/> :
          <CreditCard credit={credit}/>}
          <LogoutBtn/>
       </div>
    </aside>
  )
}

export default DashboardSidebar 
