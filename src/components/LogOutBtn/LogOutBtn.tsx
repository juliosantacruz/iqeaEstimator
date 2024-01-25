'use client'
import React, { useEffect } from 'react'
import { useUserStore } from '@/store/userStore'
import { useRouter } from "next/navigation";



export default function LogOutBtn() {
  const router = useRouter();

  const {setIsAuth, setSignout,isAuth}=useUserStore()
  console.log('not auth',isAuth)

  useEffect(()=>{
    if(!isAuth){
      console.log('not auth',isAuth)
      // router.replace('/login')
    }
  },[isAuth])

  const handleClick=()=>{
    setIsAuth(false)
    setSignout()
    router.push("/login");
  }
  return (
    <button onClick={handleClick}>Cerrar Sesion</button>
  )
}
