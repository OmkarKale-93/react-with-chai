import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers} 
    <div>
        <img src={data.avatar_url} alt="Github picture" width={300} />
    </div>
    </div>
    
  )
}

export default Github

export const useDataLoaderOfGit = async() =>{
   const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    
    return response.json();
}