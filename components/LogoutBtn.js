'use client';
import { signOut } from 'next-auth/react';

function LogoutBtn() {
  return (
    <div>
      <button onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
