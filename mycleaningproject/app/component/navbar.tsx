import React from "react";

export default function Navbar() {
  return (
    <nav className=" shadow-2xl border-gray-200 bg-blue-400 " >
      <div className="2xl:space-x-2 sm:space-x-2  md:space-x-6 max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/keqing/sticker_7.png?4996771f86fd38e818153e52edcc458f" className="h-8" alt="Flowbite Logo" />
          <span className="md:text-base self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TuSeekAndFind</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
        <div className="ml-48 hidden w-full md:flex md:w-auto" id="navbar-default">
          <ul className="md:text-xs font-medium flex space-x-8 rtl:space-x-reverse border border-gray-100 rounded-lg mt-4 md:mt-0 md:border-0  bg-yellow-800 md:bg-yellow-500 dark:border-gray-700">
            <li className="hover:bg-orange-600 rounded-lg  hover:font-bold  flex items-center justify-center">
              <a href="/" className="block py-2 px-3">About</a>
            </li>
            <li className="hover:bg-orange-600 rounded-lg   hover:font-bold flex items-center justify-center">
              <a href="#" className="block py-2 px-3">Services</a>
            </li>
            <li className="hover:bg-orange-600 rounded-lg   hover:font-bold flex items-center justify-center">
              <a href="#" className="block py-2 px-3">Pricing</a>
            </li>
            <li className="hover:bg-orange-600 rounded-lg  text-center  hover:font-bold flex items-center justify-center">
              <a href="#" className="block py-2 px-3">Contact</a>
            </li>
          </ul>
          
         
        </div > 
        <div className="rounded-lg sm:rounded bg-yellow-500 md:text-xs flex space-x-4">
  <div className="hover:bg-orange-600 rounded-lg flex items-center justify-center  p-2">
    <a href="/login" className="font-bold hover:text-black-700 hover:font-bold">Login</a>
  </div>
</div>
      </div>
    </nav>
  );
}
