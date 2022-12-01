import Head from 'next/head'
import { signOut } from "next-auth/react";

import GameShowcase from '@/root/components/GameShowcase';

import useUserSession from "@/root/hooks/useUserSession";


export default function Home() {
  const {userInfo} = useUserSession()

  return (
    <main>
      <Head>
        <title>Baffle Space Games | MVP</title>
        <meta name="description" content="Welcome to Baffle Space Games"/>
        <link rel="icon" href="./favicon.svg"/>
      </Head>

      {userInfo && (
        <div className='text-center py-2'>
          <button className='bg-red-600 text-white p-3 rounded' onClick={() => signOut()}>Sign out</button>
        </div>
      )}

      <section className='mt-24'>
        <GameShowcase/>
      </section>
    </main>
  )
}
