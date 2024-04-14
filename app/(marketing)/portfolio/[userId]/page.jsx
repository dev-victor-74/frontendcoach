import { getCurrentUser, getCurrentUserByid } from "@/app/utils/actions/get-current-user";
import { getUserPortfolio } from "@/app/utils/actions/get-user-projects"
import Hero from "@/components/portfolio/hero"
import ProjectCard from "@/components/portfolio/project-card"
import { redirect } from "next/navigation";

const PortfolioPage = async ({params}) => {
 
    const portfolios = await getUserPortfolio(params?.userId);
    const user = await getCurrentUserByid(params?.userId)
    const currentUser = await getCurrentUser();

    if(!currentUser){
      return redirect("/");
    }

  return (
    <div className="w-full px-3">
        <div className="w-full flex flex-col gap-4 md:w-[75%] mx-auto">
            <Hero user = {user}/>  
            <div className="w-full mt-8">
                 <h1 className="text-zinc-300 text-3xl md:text-4xl text-center font-bold">My <strong className="text-purple-800">Works</strong> </h1>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
               {
                 portfolios?.map(portfolio=>(
                      <ProjectCard key={portfolio?.id} portfolio={portfolio} userId={currentUser?.id}/>
                 )) 
               }
            </div>
        </div>
    </div>
  )
}

export default PortfolioPage
