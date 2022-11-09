import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import axios from 'axios';

function SignIn() {
  const { connectAsync } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { push } = useRouter();

  const handleAuth = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { account, chain } = await connectAsync({ connector: new MetaMaskConnector() });

    const userData = { address: account, chain: chain.id, network: 'evm' };

    const { data } = await axios.post<{message: string}>('/api/auth/request-message', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const message = data.message;

    const signature = await signMessageAsync({ message });

    // @ts-ignore
    const { url } = await signIn('credentials', { message, signature, redirect: false, callbackUrl: '/user' });
    await push(url);
  };

  return (
    <div>
      <h3>Web3 Authentication</h3>
      <button onClick={() => handleAuth()}>Authenticate via Metamask</button>
    </div>
  );
}

export default SignIn;