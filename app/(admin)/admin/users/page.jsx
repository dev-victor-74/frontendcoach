import { getAllUsers } from '@/app/utils/actions/get-all-users'
import UserList from '@/components/admin/user-list'

const UserListPage =async () => {

  const users = await getAllUsers();

  return (
    <div className='h-full w-full px-10 py-3'>
          <h1 className='text-xl font-bold text-zinc-200'>Users</h1>
          <div className="w-full mt-6 flex flex-col gap-6">
            {
              users?.map(user=>(
                <UserList user = {user}/>
              ))
            }
          </div>
    </div>
  )
}

export default UserListPage
