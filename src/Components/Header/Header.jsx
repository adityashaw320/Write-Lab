import React from 'react'
import {Container, Logo, LogoutBtn,} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const authStatus = useSelector((state)=> state.auth.status)

  // const 

  return (
    <div className='text-blue-600'>
      Hey I Am Header
    </div>
  )
}

export default Header
