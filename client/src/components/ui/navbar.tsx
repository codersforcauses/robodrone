import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

import { navlinks } from "@/lib/constants";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-16 w-full bg-white shadow">
      <nav className="medium-sm mx-auto flex h-full max-w-7xl items-center justify-between">
        {/* Logo container */}
        <div className="relative mx-10 flex h-10 w-28 items-center">
          <p>2025 Australia Youth Drone Tournament</p>
          {/* <Image
            className="object-contain"
            src="https://squadrone.com.au/wp-content/uploads/2024/11/squadrone-logo-01-scaled.webp"
            alt="Squadrone Logo"
            width={2560}
            height={889}
          /> */}
        </div>

        {/* Navbar options/links container */}
        <div className="hidden items-center gap-8 pr-6 lg:flex">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                router.pathname === link.href
                  ? "nav-link-active"
                  : "nav-link-base"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile navbar */}
        <button onClick={handleNav} className="mr-5 lg:hidden">
          <FiAlignJustify size={35} />
        </button>
      </nav>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 h-screen w-[300px] bg-light p-10 shadow-xl duration-500 ease-out"
            : "fixed -right-full h-screen w-[300px] duration-500 ease-in"
        }
      >
        <button onClick={handleNav} className="ml-auto block">
          <FiX size={35} />
        </button>
        <div className="medium-sm flex flex-col gap-4">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                router.pathname === link.href ? "nav-link-active" : "nav-link"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
