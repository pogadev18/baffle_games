import { getSession, GetSessionParams, signOut } from 'next-auth/react';
import { InferGetServerSidePropsType } from "next";

function User({user}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className='text-white'>
      <h4>User session:</h4>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => signOut({redirect: true})}>Sign out</button>
    </div>
  );
}

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  // redirect if not authenticated
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {user: session.user},
  };
}

export default User;