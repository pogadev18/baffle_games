import Link from 'next/link';

import Logo from "@/root/components/Logo";
import WalletConnect from "@/root/components/WalletConnect";
import useUserSession from "@/root/hooks/useUserSession";
import BuyMaticAndDashboardButtons from "@/root/components/BuyMaticAndDashboardBtns";

const Header = () => {
  const {userInfo} = useUserSession()

  return (
    <header className='flex gap-3'>
      <section className='flex flex-1 justify-between items-center px-10 py-8 text-white'>
        <section className='logo-section flex items-center gap-4'>
          <Logo width='60' height='60'/>
          <p className='uppercase font-black text-2xl'>
            <Link href='/'>
              Baffle Space
            </Link>
          </p>
        </section>

        <section className='connect-button font-bold text-sm'>
          {
            userInfo?.user ? (
              <BuyMaticAndDashboardButtons/>
            ) : (
              <WalletConnect/>
            )
          }
        </section>
      </section>
    </header>
  );
};

export default Header;