import { getSubmission } from '@/app/utils/actions/get-challenge'
import SubNav from '@/components/challenges/subnav'

const SingleProjectPage = async ({params}) => {

    const project = await getSubmission(params.projectId)
    const {user} = project || {};

    const src =`
    ${project?.html}
    <style>${project?.css}</style>
    <script>${project?.js}</script>
    `

  return (
    <div className='w-full flex flex-col h-full'>
       <SubNav id ={project?.id} user={user} name={project?.name} />
       <div className="w-full">
          <iframe
            srcDoc={src}
             marginHeight="0"
             marginWidth="0"
            className='w-full h-[calc(100vh-56px)] bg-slate-100 overflow-y-auto'
            src=''
          />
       </div>
    </div>
  )
}

export default SingleProjectPage
