import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../routes';

function Staff() {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem('user')
    navigate(routes.login)
  }
  return (
    <>
      <div>Staff</div>
      <Button onClick={logout}> logout</Button>
    </>
  )
}

export default Staff