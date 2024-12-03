"use client"

import Link from 'next/link';
import clsx from 'clsx';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 bg-gray-800 text-white">
            <h1 className='text-3xl font-bold'>Game Insider</h1>
            <div className='flex space-x-4'>
                <Link href='/' className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">Home</Link>
                <Link href='/reviews/about' className='flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'>About</Link>
                <Link href='/profile' className='flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'>Profile</Link>
                <Link href='/logout' className='flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'>Logout</Link>
            </div>
        </nav>
    )
}

export default Navbar;