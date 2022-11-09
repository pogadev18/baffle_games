import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google';

import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css'

const {provider, webSocketProvider} = configureChains(defaultChains, [publicProvider()]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const inter = Inter({ subsets: ['latin'] })


function MyApp({Component, pageProps}: AppProps) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <>
          <style jsx global>
            {`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
        </>
      </SessionProvider>
    </WagmiConfig>
  );
}

export default MyApp;