'use client';
import React from 'react';

const Navbar = () => {
  const handleSidebar = () => {
    document.getElementById('sidebar')!.style.right = '0rem';
  };

  return (
    <div className="p-5 flex w-full h-16 items-center justify-between px-4 shadow-md">
      {/* Search Section */}
      <section className="flex items-center gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-10 bg-white rounded-md px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="15"
          fill="currentColor"
          className="text-gray-500"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
        <input
          className="flex-grow h-full text-sm bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
          type="search"
          placeholder="Search your course"
        />
      </section>

      {/* Navbar Icons */}
      <div className="hidden sm:flex items-center gap-4">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/ios/50/help--v1.png"
          alt="help"
          className="hover:opacity-80 cursor-pointer"
        />
        <div className="relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full"></span>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/windows/32/speech-bubble-with-dots.png"
            alt="messages"
            className="hover:opacity-80 cursor-pointer"
          />
        </div>
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/forma-light/48/switch.png"
          alt="switch"
          className="hover:opacity-80 cursor-pointer"
        />
        <div className="relative">
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-600 rounded-full"></span>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=000000"
            alt="alarm"
            className="hover:opacity-80 cursor-pointer"
          />
        </div>
         {/* User Section */}
      <section className="flex items-center gap-3">
        <img
          width="36"
          height="36"
          src="https://i.pinimg.com/originals/e3/63/16/e36316cfd05ca21e44d8fabcf1a192be.jpg"
          alt="user"
          onClick={handleSidebar}
          className="cursor-pointer hover:opacity-80"
        />
        <h2 className="hidden sm:block text-sm font-semibold text-gray-700">
          Adeline H. Dancy
        </h2>
      </section>
      </div>
    </div>
  );
};

export default Navbar;

