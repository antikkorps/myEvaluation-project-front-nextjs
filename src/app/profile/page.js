'use client';
import { useSession } from 'next-auth/react';
import { LogoutButton } from '../../../components/buttons.components';

export default function Profile() {
  const { data: session, user } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/login?callbackUrl=/profile');
    },
  });

  console.log(session);
  if (session === 'loading') {
    return <p>Please wait while loading...</p>;
  }

  return (
    <>
      <h1>Your Profile Page</h1>
      <p>Username: {user}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <LogoutButton />
    </>
  );
}
Profile.auth = true;
