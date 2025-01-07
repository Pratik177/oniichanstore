import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Dotel Website",
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    "Nextjs, Server components, Next auth, daisyui, zustand",
};

const Home = () => {
  return (
    <div>
      this is a home page 
    </div>
  )
}

export default Home
