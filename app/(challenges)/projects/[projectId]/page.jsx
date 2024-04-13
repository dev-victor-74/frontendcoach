import SubNav from "@/components/challenges/subnav"

const SingleProductPage = ({params}) => {


  return (
    <div className='w-full h-full '>
       <SubNav/>
       <div className="w-full h-full ">
          <iframe
            className='w-full h-[calc(100vh-48px)] '
          />
       </div>
    </div>
  )
}

export default SingleProductPage