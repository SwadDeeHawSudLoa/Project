"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './Modal'; // Adjust the import path as needed

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Check login state from local storage
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail === 'admin@example.com') {
      setIsAdmin(true);
    }
  }, []);

  const handleReportClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    } else {
      router.push('/report');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <>
      <nav className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-2xl border-gray-200 bg-blue-400">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <a
            href={isAdmin ? '/mainAdmin' : '/main'}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://s3.getstickerpack.com/storage/uploads/sticker-pack/keqing/sticker_7.png?4996771f86fd38e818153e52edcc458f"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              TuItemFinder
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
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden md:flex space-x-4 items-center">
            <div className="rounded-2xl bg-yellow-500 flex items-center justify-center w-32 h-10">
              <div
                className="hover:bg-orange-600 rounded-lg flex items-center justify-center p-1 w-full h-full"
                onClick={handleReportClick}
              >
                <span className="font-bold hover:text-black-700 text-xs cursor-pointer">
                  เเจ้งพบของหาย
                </span>
              </div>
            </div>

            {isLoggedIn ? (
              <>
                {!isAdmin && (
                  <div className="hover:bg-orange-600 rounded-2xl bg-yellow-500 flex items-center justify-center w-32 h-10">
                    <a
                      href="/myposts"
                      className="font-bold hover:text-black-700 text-xs"
                    >
                      โพสต์ของฉัน
                    </a>
                  </div>
                )}
                <div className="relative">
                  <button
                    className="flex items-center space-x-2"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <img
                      src="/ggg.png" // Replace with your user avatar URL
                      className="h-8 w-8 rounded-full"
                      alt="User Avatar"
                    />
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="rounded-2xl bg-yellow-500 flex items-center justify-center w-32 h-10">
                <div className="hover:bg-orange-600 rounded-lg flex items-center justify-center p-1 w-full h-full">
                  <a
                    href="/login"
                    className="font-bold hover:text-black-700 text-xs"
                  >
                    Login
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onClose={closeModal}
          post={{
            id: '',
            img: '',
            name: '',
            place: '',
            category: '',
            status: '',
            des: '',
            username: '',
            tell: '',
          }}
          view="status"
        />
      )}
    </>
  );
};

export default Navbar;
