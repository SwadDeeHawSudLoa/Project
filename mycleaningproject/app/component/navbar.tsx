import React from "react";
export default function navbar() {
    return (
<nav className="bg-white border-gray-200 dark:bg-blue-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/keqing/sticker_7.png?4996771f86fd38e818153e52edcc458f" className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyCleaningServise</span>
    </a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-yellow-800 md:dark:bg-yellow-500 dark:border-gray-700">

        <li className=" hover:text-sky-700 hover:font-bold">
          <a href="#" className="block py-2 px-3">About</a>
        </li>
        <li className=" hover:text-sky-700 hover:font-bold">
          <a href="#" className="block py-2 px-3">Services</a>
        </li>
        <li className=" hover:text-sky-700 hover:font-bold">
          <a href="#" className="block py-2 px-3">Pricing</a>
        </li>
        <li className=" hover:text-sky-700 hover:font-bold">
          <a href="#" className="block py-2 px-3">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
  }
  