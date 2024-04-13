import ChallengeNav from '@/components/challenges/challenge-nav';
import { getCurrentUser } from '../utils/actions/get-current-user';


const ChallengesLayout = async({children}) => {
 
    const currentUser = await getCurrentUser();

  return (
    <div className='w-full h-full' id='la'>
        <ChallengeNav currentUser={currentUser} href='/dashboard'/>
       <main className='w-full h-full'>
          {children}
       </main>
    </div>
  )
}

export default ChallengesLayout
