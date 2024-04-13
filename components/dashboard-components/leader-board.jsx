import { GoTrophy } from "react-icons/go";

const LeaderBoard = () => {
  return (
    <div className='
    cursor-pointer
    flex 
    bg-[#080f25]  h-[180px] rounded-md hover:bg-[#0c1125]
   '>
       <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center justify-center w-full relative">
              <div className='font-bold text-center text-xl text-zinc-300'>Leaderboard</div>
              <GoTrophy
               size={30}
                color=""
                className="font-bold text-yellow-500 animate-pause duration-500 ml-2 absolute right-[100px]"
              />
          </div>
          <div className="w-16 h-16 rounded-full border bg-yellow-900 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  20/100
              </span>
          </div>
       </div>
   </div>
  )
}

export default LeaderBoard
// w-[320px] h-[180px]