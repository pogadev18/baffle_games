import Head from 'next/head'
import { signOut } from "next-auth/react";

import GameShowcase from '@/root/components/GameShowcase';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Baffle Space Games | MVP</title>
        <meta name="description" content="Welcome to Baffle Space Games"/>
        <link rel="icon" href="./favicon.svg"/>
      </Head>

      <section className='mt-24'>
        <button className='text-white' onClick={() => signOut()}>sign out</button>
        <GameShowcase/>
      </section>
    </main>
  )
}
