import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Your Profile Page</h1>
      {session ? (
        <pre>{JSON.stringify(session, null, 2)}</pre>
      ) : (
        <p>You are not logged in</p>
      )}
    </>
  );
}
