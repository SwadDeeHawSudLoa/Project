import React from "react";

export default function Navbar() {
  return (
    <nav className="shadow-2xl border-gray-200 bg-blue-400">
      <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/keqing/sticker_7.png?4996771f86fd38e818153e52edcc458f"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TuSeekAndFind
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"strokeWidth="2"d="M1 1h15M1 7h15M1 13h15"/></svg></button>
        <div className="hidden md:flex space-x-4">
          <div className="rounded-2xl bg-yellow-500 flex items-center justify-center w-32 h-10">
            <div className="hover:bg-orange-600 rounded-lg flex items-center justify-center p-1 w-full h-full">
              <a href="/signUp" className="font-bold hover:text-black-700 hover:font-bold text-xs">
              เเจ้งพบของหาย
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-yellow-500 flex items-center justify-center w-32 h-10">
            <div className="hover:bg-orange-600 rounded-lg flex items-center justify-center p-1 w-full h-full">
              <a href="/login" className="font-bold hover:text-black-700 hover:font-bold text-xs">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

 