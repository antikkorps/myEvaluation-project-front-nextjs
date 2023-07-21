'use client';
import { SessionProvider as AuthSessionProvider } from 'next-auth/react';

export default function AuthProvider({ children }) {
  return <AuthSessionProvider>{children}</AuthSessionProvider>;
}
