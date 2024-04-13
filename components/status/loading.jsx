 "use client"

import { ImSpinner3 } from 'react-icons/im'

const Loading = () => {
  return (
    <div className='w-[300px] h-[300px] mx-auto mt-40 md:mt-10 flex items-center justify-center'>
        <ImSpinner3 size={40} color='blue' className='animate-spin' />
    </div>
  )
}

export default Loading
