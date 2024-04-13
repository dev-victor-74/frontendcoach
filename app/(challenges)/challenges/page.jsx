import { getCurrentUser } from '@/app/utils/actions/get-current-user'
import ChallengeList from '@/components/challenges/challenge-list'

const ChallengesPage = async() => {

  const currentUser = await getCurrentUser();
  
  return (
    <div className='w-full h-full px-2 py-3'>
        <ChallengeList currentUser={currentUser}/>
    </div>
  )
}

export default ChallengesPage
