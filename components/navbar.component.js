import Link from 'next/link';
import { LoginButton, RegisterButton } from './buttons.components';

export default function Navbar() {
  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/dashboard'>Dashboard</Link>
      <a href='/register'>Register</a>
      <Link href='/profile'>Profile</Link>
      <Link href='/users'>users</Link>
      <LoginButton>Login</LoginButton>
      <RegisterButton>Register</RegisterButton>
    </>
  );
}
