import { getAllSubmissions } from '@/app/utils/actions/get-all-challenges'
import SubList from '@/components/challenges/sublist'

const SubmissionPage = async() => {

  const projects = await getAllSubmissions()

  
  return (
    <div className='w-full h-full px-4 py-3'>

        <SubList projects ={projects}/>
    </div>
  )
}

export default SubmissionPage
