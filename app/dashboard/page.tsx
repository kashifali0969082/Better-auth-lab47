"use client"
import React from 'react'
import { authClient } from '@/lib/auth-client'
const page = () => {
    const {data}=authClient.useSession();
  return (
    <div>welcome {data?.user?.email}too the dashboard page</div>
  )
}

export default page