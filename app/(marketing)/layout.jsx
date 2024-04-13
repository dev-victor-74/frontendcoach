import Footer from '@/components/footer';
import HomeNavbar from '@/components/home-navbar';
import { getCurrentUser } from '../utils/actions/get-current-user';


const MarketingLayout = async({children}) => {

  const currentUser = await getCurrentUser();

  return (
    <main id='lay' className='h-full w-full'>
       <HomeNavbar currentUser={currentUser} />
       {children}
       <Footer/>
    </main>
  )
}

export default MarketingLayout
