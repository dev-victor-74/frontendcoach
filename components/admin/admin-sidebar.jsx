import clsx from 'clsx';
import Image from 'next/image';
import DashboardSidebarItems from '@/components/dashboard-sidebar-items';
import { links } from '@/lib/admin-dashboard_links';
import LogoutBtn from '../logout-btn';


const AdminSidebar = () => {
  return (
    <aside 
     className='w-full h-full flex flex-col items-center'
    >
        <div className="w-full px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 relative bg-blue-900 ring-2 ring-purple-800
                 rounded-full cursor-pointer
                 overflow-hidden
                 "
            >
            
          </div>
          <h2 className={clsx('text-zinc-100 font-bold text-2xl tracking-wider')}>frontendcoach</h2>
       </div> 
       <div className="w-full px-4 mt-6 text-zinc-300 flex flex-col gap-1">
          { links.map(link=>(
             <DashboardSidebarItems
               key={link.id}
               label={link.label}
               href={link.href}
               icon={<link.Icon size={18}/>}
             />
          ))
          }
       </div>

       <LogoutBtn/>
    </aside>
  )
}

export default AdminSidebar
