import { LogoutButton } from '../../components/buttons.components';
import { getServerSession } from 'next-auth/next';

export default async function Profile(req, res) {
  const { data: session, update } = await getServerSession();
  console.log(session);
  if (session) {
    return (
      <>
        <h1>Profile Page</h1>
        <p>Signed in as {session.username}</p>

        <LogoutButton />
      </>
    );
  } else {
    return (
      <>
        <h1>Profile Page</h1>
        <p>You are not signed in.</p>
      </>
    );
  }
}
