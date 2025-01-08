import React from 'react'
import { getServerSession } from 'next-auth'
import {redirect} from 'next/navigation'
import SignupForm from '@/components/signupForm'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const Signup = async () => {

  const session = await getServerSession(authOptions)

  if(session) redirect("/games")

  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default Signup