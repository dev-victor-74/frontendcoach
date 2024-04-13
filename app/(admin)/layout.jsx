import AdminSidebar from "@/components/admin/admin-sidebar";
import DashboardNavbar from "@/components/dashboard-navbar";

import { getCurrentUser } from "../utils/actions/get-current-user";

const AdminLayout = async({children}) => {
   
   const currentUser = await getCurrentUser();

  return (
    <div>
        <div>
       <div className='
        w-full
        h-full
        flex
        item-center
      '>
        <div className="hidden md:flex w-[240px] h-full fixed bg-[#040414] ">
             <AdminSidebar/>
        </div> 
        <main className='sm: pl-0 md:pl-[240px] bg-[#0a0c22f5] w-full h-full' id='lay'>
          <DashboardNavbar currentUser={currentUser} href='/admin/dashboard' />
          <div className="w-full h-full ">
            {children}
          </div>
        </main>
    </div>
    </div>
    </div>
  )
}

export default AdminLayout
