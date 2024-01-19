import React from 'react'; // Make sure to import React
import Image from 'next/image';
import NavBar from '@/app/component/navbar'; // Assuming NavBar is a React component

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="  flex justify-center items-center h-screen">
      <div className="rounded-lg shadow-xl bg-red-200 w-5/12 h-4/6">
      <div className="flex justify-center items-center">
      <div className="flex flex-col items-center">
        <input className="bg-wight-400 shadow p-2" type="text" />
      </div>
      <div className="flex flex-col items-center">
        <input className="bg-wight-400 shadow p-2" type="text" />
      </div>
    </div>

      </div>
    </div>
  

    </>
  );
}

