import { getChallenge } from '@/app/utils/actions/get-challenge';
import HowOthersSolved from '@/components/challenges/how-others-solved';
import SingleChallengeCard from '@/components/challenges/single-challenge-card'

const SingleChallengePage = async({params}) => {

     const id = params.challengeId;
     const data = await getChallenge(id)

  return (
    <div className='w-full h-full pb-10'>
        <div className="w-full flex items-center justify-center mt-8 px-2">
           <SingleChallengeCard data = {data}/>
        </div>
         <div className="w-full md:w-[85%] flex items-center mx-auto px-3">
            <h2 className='text-2xl md:text-4xl text-zinc-200 font-semibold md:font-bold'>See how others solved this challenge</h2>
         </div>
        <div className="w-full md:w-[85%] mx-auto">
           <HowOthersSolved id={id}/>
        </div>
    </div>
  )
}

export default SingleChallengePage
