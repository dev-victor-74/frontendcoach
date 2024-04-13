import { getAllChallenges } from "@/app/utils/actions/get-all-challenges";


const Challenges = async() => {
    
 const challenges = await getAllChallenges();

  return (
    <div
        className='
        cursor-pointer
        flex 
        bg-[#080f25]  h-[180px] rounded-md ring-2 ring-purple-800 hover:bg-[#0c1125]
   '>
      <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center">
              <span className='text-xl font-bold text-center text-zinc-300'>Challenges</span>
          </div>
          <div className="w-24 h-14 rounded-md border bg-rose-900 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  {challenges?.length}
              </span>
          </div>
       </div>
     
   </div>
  )
}

export default Challenges
