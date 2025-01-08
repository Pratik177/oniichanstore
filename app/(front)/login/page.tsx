import React from 'react'
import LoginForm from '@/components/LoginForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { config } from '@/app/api/auth/[...nextauth]/route'
const Login = async () => {
  const session = await getServerSession(config)

  if(session) redirect("/games")
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default Login