import { FacebookFilled, InstagramFilled, LinkedinFilled, PinterestFilled, SkypeFilled, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <>
      <div className='px-6 md:px-12 py-8 bg-[#b54141] footer'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu area */}
          <div className="text-[#fefdfe] w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories area*/}
          <div className="text-[#fefdfe] w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Crockery</Link></h1>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Plant pots</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company area */}
          <div className="text-[#fefdfe] w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <h1><Link href='/about'>About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mail */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className='mt-4 '>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md '
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer area */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2025. All rights reserved Umm-E-habiba Madni</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'}><LinkedinFilled size={20} /></Link>
            <Link href={'/'}><FacebookFilled size={20} /></Link>
            <Link href={'/'}><InstagramFilled size={20} /></Link>
            <Link href={'/'}><SkypeFilled size={20} /></Link>
            <Link href={'/'}><TwitterOutlined size={20} /></Link>
            <Link href={'/'}><PinterestFilled size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};