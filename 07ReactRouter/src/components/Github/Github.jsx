import React, { useState } from 'react'
import { useEffect } from 'react'
//import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const[data,setData]=useState([])
    useEffect(()=>{
      fetch('https://api.github.com/users/NikhilMoudgil')
      .then(response => response.json())
      .then(data=>{
        console.log(data);
        setData(data)
      })
    },[])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github Public Repositories: {data.public_repos}
      <div className='flex-10 align-baseline'>
      <img  className='rounded-4xl' src={data.avatar_url}alt="Git Picture" width={300} />
      <div className='bg-amber-200 p-1.5 text-black rounded-2xl flex'>Github Bio : {data.bio}</div>
      </div>
    </div>
  )
}
/*export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/NikhilMoudgil')
  return response.json()
}*/