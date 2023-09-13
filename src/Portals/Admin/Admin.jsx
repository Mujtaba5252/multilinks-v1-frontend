import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes';

function Admin() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('user')
    navigate(routes.login)
  }
  return (
    <>
    <div>Admin.</div>
    <Button onClick={logout}> logout</Button>
    </>
  )
}

export default Admin