'use client';
import { useSession } from 'next-auth/react';
import { LogoutButton } from '../../../components/buttons.components';

export default function Profile() {
  const { data: session, status } = useSession();

  console.log(status);
  if (status === 'loading') {
    return <p>Please wait while loading...</p>;
  }

  console.log(session);
  // If the user is not logged in, display a message
  if (!session) {
    return <p>You are not logged in</p>;
  }

  // Extract the username from the session object
  const { user } = session;

  return (
    <>
      <h1>Your Profile Page</h1>
      <p>Username: {user.username}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <LogoutButton />
    </>
  );
}
Profile.auth = true;
