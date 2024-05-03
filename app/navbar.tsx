"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname= usePathname();
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <div className="hidden fixed md:inline-flex w-[100%] flex-row h-28 text-[#1A8CD8] items-center justify-between font-extrabold shadow-[0_0.5px_0px_0px_rgba(26,140,216,0.5)]">
        <Link href="#" className="text-4xl w-1/3 ml-20">
          Ovegam
        </Link>
        <ul className="text-sm font-light flex flex-row justify-evenly items-start w-2/3 mr-20">
          <Link href="/" className={`py-1 hover:underline underline-offset-8 ${pathname==='/'?'underline font-extrabold':''}`}>
            HOME
          </Link>
          <Link href="/product" className={`py-1 hover:underline underline-offset-8 ${pathname==='/product'?'underline  font-extrabold':''}`}>
            PRODUCT
          </Link>
          <Link href="/pricing" className={`py-1 hover:underline underline-offset-8 ${pathname==='/pricing'?'underline  font-extrabold':''}`}>
            PRICING
          </Link>
          <Link href="/contact" className={`py-1 hover:underline underline-offset-8 ${pathname==='/contact'?'underline  font-extrabold':''}`}>
            CONTACT
          </Link>
          <span className="border-[#1A8CD8] border-[1px] px-5 py-1 rounded-full hover:bg-[#1A8CD8] hover:text-white">
            LOGIN
          </span>
        </ul>
      </div>
      <div className="md:hidden h-28 flex flex-row items-center font-bold shadow-[0_0.5px_0px_0px_rgba(26,140,216,0.5)]">
        <Link href="#" className="text-[#1A8CD8] text-5xl w-1/2 ml-20">
          Ovegam
        </Link>
        <div
          onClick={toggle}
          className="flex flex-col space-y-1 items-end w-1/2 mr-20 flex-grow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${!isOpen ? "block" : "hidden"} w-6 h-6 fill-[#1A8CD8]`}
          >
            <path
              fill-rule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${isOpen ? "block" : "hidden"} w-6 h-6 fill-red-500`}
          >
            <path
              fill-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute h-[100%] w-[75%] justify-evenly items-center top-28 flex-col bg-[#1A8CD8] text-white text-2xl `}
        >
          <Link href="#" className="hover:underline underline-offset-8">
            HOME
          </Link>
          <Link href="#" className="hover:underline underline-offset-8">
            PRODUCT
          </Link>
          <Link href="#" className="hover:underline underline-offset-8">
            PRICING
          </Link>
          <Link href="#" className="hover:underline underline-offset-8">
            ABOUT
          </Link>
          <span className="border-white border-[1px] px-5 py-1 rounded-full">
            LOGIN
          </span>
        </ul>
      </div>
    </div>
  );
}
