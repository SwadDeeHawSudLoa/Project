import React from 'react'; // Make sure to import React
import Image from 'next/image';
import NavBar from '@/app/component/navbar'; // Assuming NavBar is a React component
import FilterSearch from './component/FilterSearch';
export default function Home() {
  return (
    <>
    <NavBar/>
    <FilterSearch/>
      <div className="bg-[url('/img/img.png')]">
  
</div>
    </>
  );
}

