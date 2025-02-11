"use client"
import { trpc } from '@/trpc/client'
import React from 'react'

const PageClient = () => {
    const [data]=trpc.hello.useSuspenseQuery({
        text:"mohsen"
    })
  return (
<div className="bg-violet-100 flex items-center justify-center min-h-9 ">
    Hi {data.greeting}
   </div>  )
}

export default PageClient