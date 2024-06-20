import React, { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const handleReportClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true); // Show the modal
    } else {
      window.location.href = "/main";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 shadow-2xl border-gray-200 bg-blue-400">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
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
          <div className="hidden md:flex space-x-4">
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

            {!isLoggedIn && (
              <div className="rounded-2xl bg-yellow-500 flex items-center justify-center w-32 h-10">
                <div className="hover:bg-orange-600 rounded-lg flex items-center justify-center p-1 w-full h-full">
                  <a
                    href="/login"
                    className="font-bold hover:text-black-700 hover:font-bold text-xs"
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
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-10 rounded-lg shadow-2xl w-1/3 relative">
      <h1 className="text-3xl font-bold mb-6 text-center">หากคุณต้องการเเจ้งพบของหาย<br/>โปรดเข้าสู่ระบบ</h1>
      <h2 className="text-2xl mb-6  text-center">หากคุณไม่ได้เป็นบุคลากรหรือนักศึกษาใน <br />มหาวิทยาลัยโปรดติดต่อเจ้าหน้าที่ ที่อาคาร  SC1</h2>
      <div className="flex flex-col items-center">
      <button
          className="bg-green-400 text-black px-6 py-3 rounded-lg text-lg mb-4"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          ดูหมุด
        </button>
        <button
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg mb-4 border-black"
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Go to Login
        </button>
      </div>
      <button
        className="absolute top-2 right-2 text-black px-3 py-2 rounded-full text-lg border-black"
        onClick={closeModal}
      >
        &#x2715;
      </button>
    </div>
  </div>
)}




    </>
  );
};

export default Navbar;
