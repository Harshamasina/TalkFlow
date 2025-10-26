import { isAuthenticate } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import SignOut from '@/components/SignOut'
import logo from '../../public/logo_3.png';

const Rootlayout = async ({children}: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticate();
    if(!isUserAuthenticated) redirect('/sign-in');
    return (
        <div className='root-layout'>
            <nav className='flex items-center justify-between'>
                <Link href="/" className='flex items-center gap-2'>
                    <Image src={logo} alt='logo' width={38} height={32} />
                    <h2 className='text-primary-100'>TalkFlow</h2>
                </Link>
                {isUserAuthenticated && <SignOut />}
            </nav>
            {children}
        </div>
    )
};

export default Rootlayout;
