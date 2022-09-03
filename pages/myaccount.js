import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


const MyAccount = () => {
    let router = useRouter()

    useEffect(()=>{
       if(!localStorage.getItem('token')){
        router.push('/')
       }
    },[])
  return (
    <div>
      MyAccount
    </div>
  )
}

export default MyAccount
