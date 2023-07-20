'use client';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session, status } = useSession();

  console.log(status);
  if (status === 'loading') {
    return <p>Loading...</p>;
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
      <p>Username: {user.name}</p>
    </>
  );
}
Profile.auth = true;
