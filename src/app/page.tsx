"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const { data: session }: any = useSession();
  console.log(session)
  if (session?.user?.token ==='Admin') {
    router.push('/framework/dashboard')
  }
  else if  (session?.user?.token ==='User') {
    router.push('/nsbh/asuransi-gempabumi')
  }
    return (
      <div>
      </div>
    )
}
