import { useState } from "react";
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';

import Logo from "@/root/components/Logo";
import WalletConnect from "@/root/components/WalletConnect";
import useUserSession from "@/root/hooks/useUserSession";

const Header = () => {
  const {userInfo} = useUserSession()

  return (
    <header className='flex gap-3'>
      <section className='flex flex-1 justify-between items-center bg-light-black px-10 py-2 text-white'>
        <section className='logo-section flex items-center gap-4'>
          <Logo width='60' height='60'/>
          <p className='uppercase font-medium text-2xl'>
            <Link href='/'>
              Baffle Space
            </Link>
          </p>
        </section>

        <section className='connect-button text-baffle-blue font-bold text-sm'>
          {
            // @ts-ignore
            userInfo?.user ? `${userInfo.user?.address?.slice(0, 8)}...` : (
              <WalletConnect/>
            )
          }
        </section>
      </section>

      {userInfo?.user && (
        <section className='dashboard-section flex items-center justify-center text-center px-10 py-2 bg-light-black'>
          <p className='text-baffle-blue font-bold text-sm'>
            <button className='flex items-center gap-2 uppercase transition-colors hover:text-white'>
              <FaRegUser size='20px'/>Dashboard
            </button>
          </p>
        </section>
      )}

    </header>
  );
};

export default Header;