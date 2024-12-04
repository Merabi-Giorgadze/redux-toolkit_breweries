import React, { useEffect } from 'react'
import { fetchUsers } from '../store/users/action'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { decrement, increment } from '../store/users/user.slice'

const HomePage:React.FC = () => {
 const {count, users, isLoading, error} = useAppSelector(state => state.userReducer)
 const dispatch = useAppDispatch()

 useEffect(() => {
   dispatch(fetchUsers())
 },[])

 if(isLoading) return <h1>loading...</h1>
  return (
   <>
   <h1>Hello word</h1>
   {users.map(({id, email}) => <div key={id}>
     <h4>{email}</h4>
   </div>)}
   {error && <h1>{error}</h1>}
   <h2>{count}</h2>
   <button onClick={() => dispatch(increment())}>increment</button>
   <button onClick={() => dispatch(decrement())}>dencrement</button></>
  )
}

export default HomePage