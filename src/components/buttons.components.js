'use client';

import { signIn, signOut } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import Link from 'next/link';

export const LoginButton = () => {
  const { data: session } = getServerSession();
  if (!session) {
    return (
      <button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Log in
      </button>
    );
  } else {
    return null;
  }
};

export const RegisterButton = () => {
  return (
    <Link href='/register' style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href='/profile'>Profile</Link>;
};
