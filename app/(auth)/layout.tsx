import { isAuthenticate } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'

const Authlayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticate();
    // Auth pages (sign-in/up) should be accessible when NOT authenticated.
    // If already authenticated, send user to the app.
    if (isUserAuthenticated) redirect('/interviews');

    return <div className='auth-layout'>{children}</div>
}

export default Authlayout
