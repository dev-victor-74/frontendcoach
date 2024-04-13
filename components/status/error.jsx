"use client"

const Error = ({text,className}) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
         <h1 className={className}>
             {text}
         </h1>
    </div>
  )
}

export default Error
