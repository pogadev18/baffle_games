import React from 'react';
import { FaWallet } from "react-icons/fa";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useAccount, useConnect, useDisconnect, useSignMessage } from "wagmi";
import { useRouter } from "next/router";

const WalletConnect = () => {
  const {connectAsync} = useConnect();
  const {disconnectAsync} = useDisconnect();
  const {isConnected} = useAccount();
  const {signMessageAsync} = useSignMessage();
  const {push} = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    try {
      const {account, chain} = await connectAsync({connector: new MetaMaskConnector()});

      const userData = {address: account, chain: chain.id, network: 'evm'};

      const {data} = await axios.post<{ message: string }>('/api/auth/request-message', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const message = data.message;

      const signature = await signMessageAsync({message});

      // @ts-ignore
      const {url} = await signIn('credentials', {message, signature, redirect: false, callbackUrl: '/'});
      await push(url);
    } catch (err) {
      // todo: better / friendlier error handling
      alert('Install MetaMask to connect!')
    }

  };


  return (
    <button
      className='rounded-lg bg-main-yellow text-black font-medium py-2 px-6 text-lg transition-colors hover:bg-main-yellow-hover'
      onClick={() => handleAuth()}
    >
      Connect Wallet
    </button>
  );
};

export default WalletConnect;