import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../feature/auth'
import authService from '../../appwrite/auth'

const LogoutBtn = () => {

        const dispatch = useDispatch()
        const logoutHandler = ()=> {
            authService.logout()
            .then(()=>{
                dispatch(logout())
            })
            .catch((err)=>{
                console.log('Logout failed error',err);
            })
        }

  return (
    <button onClick={logoutHandler}
     className='inline-block px-6 py-4 duration-200 hover:bg-blue-200 rounded-full'>
      
    </button>
  )
}

export default LogoutBtn
