// uncomment next line to use next-auth middleware (protect all routes)
export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/profile/:path*', '/dashboard/:path*', '/users/:path*'],
};

// example matcher to allow access to /about and /dashboard
// export const config = {
//   matcher: ['/about/:path*', '/dashboard/:path*'],
// }
