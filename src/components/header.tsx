

"use client";

import Link from "next/link";
import { SearchOutlined, } from "@ant-design/icons";
import React, { useState } from 'react';
import { MenuIcon, ShoppingCart, UserCircle, } from "lucide-react";





// export default function Header({}: { products : any}) {
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

return (
  <nav className="bg-black w-full h-20 ">
    <input type="checkbox" id="check" />
    <label htmlFor="check" className="block md:hidden">
      <MenuIcon {...{ onClick: toggleMenu }} className="text-pink-800 float-right mt-6" />
    </label>
    <Link href={"/"}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold pl-10 pt-20 absolute font-[LucidaConsole] text-pink-800 hover:text-yellow-700">Ethereal Beauty</h1>
      </div>
    </Link>
    <div>
      <ul
        className={`md:flex justify-end pt-7 pr-4 text-[20px] items-center gap-4   ${isMenuOpen ? 'flex flex-col absolute top-20 justify-center text-center w-[100%] h-[450px]  bg-black text-pink-800 transition-all ease-in-out duration-300  ' : 'hidden'}`} 
      >
        <Link href="/">
          <li className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300">home</li>
        </Link>
        <Link href="/Aboutpage">
          <li className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300">about</li>
        </Link>
        <Link href="/cart">

          <li className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300">cart
          </li>
        </Link>
        <li className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300">wishlist</li>
        <li>
          <SearchOutlined className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300" />
        </li>
        <Link href="/cart">
          <li>
            <ShoppingCart className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300" />
          </li>
        </Link>
        <Link href="/accountpage">
        <li>
          <UserCircle className="hover:text-yellow-700 text-pink-800 hover:translate-y-1 hover:scale-110 hover:duration-300" />
        </li>
        </Link>
      </ul>
    </div>

    
  </nav>
);
}
// export function Header2() {
//   return (
//     <nav className="bg-gray-50 w-full h-14 hidden lg:block xl:block">
//       <ul className="w-full h-16  flex gap-8 text-center  items-center justify-center  text-gray-400">
//         <li>All products</li>
//         <li>Plant Pot</li>
//         <li>Ceramics</li>
//         <li>Tables</li>
//         <li>Chairs</li>
//         <li>Crockery</li>
//         <li>Tableware</li>
//         <li>Cutlery</li>
//       </ul>
//     </nav>
//   );
// }