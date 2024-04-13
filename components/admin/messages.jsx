

const Messages = () => {


  return (
    <div
        className='
        cursor-pointer
        flex 
        bg-[#080f25]  h-[180px] rounded-md hover:bg-[#0c1125]
   '>
      <div 
       className="
        flex flex-col items-center justify-center w-full gap-4
       ">
          <div className="flex items-center">
              <span className='text-xl font-bold text-center text-zinc-300'>Messages</span>
          </div>
          <div className="w-16 h-16 rounded-full border bg-yellow-900 flex items-center justify-center p-2">
              <span className='font-semibold text-xs text-gray-300'>
                  50
              </span>
          </div>
       </div>
     
   </div>
  )
}

export default Messages
