import { useState, useEffect } from "react";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";

import { authenticatedStatuses } from "@/root/constants";

const useUserSession = () => {
  const [userInfo, setUserInfo] = useState<Session | null>(null);
  const {status} = useSession();

  const {authenticated} = authenticatedStatuses;


  useEffect(() => {
    if (status === authenticated) {
      const displayUserData = async () => {
        try {
          const session = await getSession();

          if (session) setUserInfo(session)

        } catch (err) {
          setUserInfo(null)
        }

      }

      displayUserData();
    }
  }, [status, authenticated])


  return {userInfo}

}

export default useUserSession;