import { useState, useEffect } from "react";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const useWalletUserSession = () => {
  const [walletUserInfo, setWalletUserInfo] = useState<Session | null>(null);


  useEffect(() => {
    if (authCookie) {
      const displayWalletUserData = async () => {
        try {
          const session = await getSession();

          if (session) setWalletUserInfo(session)

        } catch (err) {
          setWalletUserInfo(null)
        }
      }

      displayWalletUserData();
    }
  }, [])

  return {walletUserInfo}
}

export default useWalletUserSession;

