import { getMyProjects } from "@/app/utils/actions/get-my-projects"
import MyProjectCard from "@/components/portfolio/my-project-card";

const ChallengesCompleted = async () => {

   const myProjects = await getMyProjects();

  return (
    <div className='w-full h-full flex flex-wrap items-center justify-center mt-10 mb-8' >
       <div className="px-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {
          myProjects?.map(project=>(
            <MyProjectCard key={project?.id} data = {project}/>
          ))
          }
       </div>
    </div>
  )
}

export default ChallengesCompleted

