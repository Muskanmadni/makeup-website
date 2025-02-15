'use client';
import Link from 'next/link';

import { SignIn}  from '@clerk/nextjs';


export default function Page() {
  const page = "https://open-cow-26.accounts.dev/user";


  return (
    <section className="flex flex-col items-center justify-center w-full h-screen">
      <SignIn afterSignInUrl={page} />
      <Link href="/studio">
      <button className='bg-[#2A254B] py-4 px-6 rounded-[5px] text-[#F9F9F9]'>
        Click Here if you are Admin
      </button>
    </Link>

  </section>
  
  );
}



