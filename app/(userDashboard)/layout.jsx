import DashboardNavbar from '@/components/dashboard-navbar';
import DashboardSidebar from '@/components/dashboard-sidebar';

import { getCurrentUser } from '../utils/actions/get-current-user';



const DashBoardLayout = async({children}) => {

  const currentUser = await getCurrentUser();

  return (
    <div>
      <div className='
        w-full
        h-full
        flex
        item-center
      '>
        <div className="hidden md:flex w-[245px] h-full fixed bg-[#040414] ">
           <DashboardSidebar/>
        </div> 
        <main className='pl-0 md:pl-[240px] bg-[#0a0c22f5] w-full h-full' id='lay'>
          <DashboardNavbar currentUser={currentUser} href='/dashboard' />
          <div className="w-full h-full ">
            {children}
          </div>
        </main>
    </div>
    </div>
  )
}

export default DashBoardLayout
