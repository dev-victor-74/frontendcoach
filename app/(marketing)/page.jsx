import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Faq from "@/components/home/faq";
import Intro from "@/components/home/intro";
import ProBenefit from "@/components/home/probenefit";
import SuccessStories from "@/components/home/success-stories";

const HomePage = () => {
  return (
    <div className='h-full flex flex-col'>
       <div className="w-full h-[80vh] flex items-center justify-center" >
         <Hero/>
       </div>
       <div className="w-full  flex items-center justify-center px-4">
           <Intro/>
       </div>
       <div className="w-full  flex items-center justify-center px-4 mb-5">
           <ProBenefit/>
       </div>
       {/* <div className="w-full flex py-12 px-2 mt-4 mb-5">
           <Faq/>
       </div> */}
       <div className="w-full  flex items-center justify-center px-4 py-10">
           <SuccessStories/>
       </div>
    </div>
  )
}

export default HomePage
