"use client";
import React, { useEffect, useState } from "react";
import { HiBell, HiSearch } from "react-icons/hi";
import { UserButton } from "@clerk/nextjs";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="navLink">Home</li>
          <li className="navLink">Tv Series</li>
          <li className="navLink">Movies</li>
          <li className="navLink">New & Popular</li>
          <li className="navLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light pr-4">
        <HiSearch className="hidden w-6 h-6 sm:block" />
        <p className="hidden lg:block">Kids</p>
        <HiBell className="w-6 h-6" />
        <UserButton />
      </div>
    </header>
  );
}

export default Navbar;
