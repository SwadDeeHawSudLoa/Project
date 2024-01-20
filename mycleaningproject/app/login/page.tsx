import React from 'react'; // Make sure to import React
import Image from 'next/image';
import NavBar from '@/app/component/navbar'; // Assuming NavBar is a React component

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen w-auto ">
      <div className="rounded-lg shadow-xl bg-red-200 w-full md:w-5/12  p-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              className="w-full bg-white-400 shadow p-2 rounded-md"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              className="w-full bg-white-400 shadow p-2 rounded-md"
              type="text"
              placeholder="Password"
            />
          </div>
          <div >
            <button className='hover:font-bold  hover:bg-orange-600 sm:flex sm:items-center sm:dark:bg-yellow-500 sm:rounded-lg max-w-screen-xl flex items-center justify-between mx-auto p-2 md:dark:bg-yellow-500 mt-5 rounded-lg shadow-xl dark:bg-yellow-500 w-full '>Login</button>
            
          </div>
        </div>
      </div>
    </div>
  

    </>
  );
}

