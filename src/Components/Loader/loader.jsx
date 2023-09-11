import React from 'react'
import { Loader } from '@mantine/core'
import './loader.css'

function loader() {
  return (
    <div className='loader_div'>
      <Loader className='loader'/>
    </div>
  )
}

export default loader