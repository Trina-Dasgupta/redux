import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { fetchUsers } from "./userSlice"

const UserView = () => {
    const dispatch=useDispatch();
    const user=useSelector((state)=>state.user)
    useEffect(() => {
     dispatch(fetchUsers())
    }, [])
    
  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div>:null}
        {!user.loading && user.users.length?
        <ul>
            {user.users.map((user)=>{
                return (
                    <li key={user.id}>{user.name}</li>
                )
            })}
        </ul>:null}
    </div>
  )
}

export default UserView