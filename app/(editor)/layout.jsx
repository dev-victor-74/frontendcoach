import { getCurrentUser } from '../utils/actions/get-current-user';
import CodeWrapper from '@/components/code/code-wrapper';

const CodeLayout = async({children}) => {
   
   const user = await getCurrentUser();

  return (
      <CodeWrapper children={children} user={user}/>
  )
}

export default CodeLayout
