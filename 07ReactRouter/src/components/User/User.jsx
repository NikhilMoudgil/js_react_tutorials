import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const{userid}= useParams()
  return (
    <div className='bg-gray-400 text-black text-3xl p-4 px-70'>
      User:{userid}
    </div>
  )
}

export default User
