import { getAllChallenges } from '@/app/utils/actions/get-all-challenges';
import { getCurrentUser } from '@/app/utils/actions/get-current-user'
import ChallengeList from '@/components/challenges/challenge-list'

const ChallengesPage = async() => {

  const currentUser = await getCurrentUser();
  const challenges = await getAllChallenges();
  
  return (
    <div className='w-full h-full px-2 py-3'>
        <ChallengeList currentUser={currentUser} challenges={challenges}/>
    </div>
  )
}

export default ChallengesPage
