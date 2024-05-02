"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <div className="hidden md:inline-flex w-screen flex-row h-28 text-[#1A8CD8] items-center justify-between font-extrabold shadow-[0_0.5px_0px_0px_rgba(26,140,216,0.5)]">
        <Link href="#" className="text-4xl w-1/3 ml-20">
          Ovegam
        </Link>
        <ul className="text-sm font-light flex flex-row justify-evenly items-start w-2/3 mr-20">
          <Link href="#" className="py-1 hover:underline underline-offset-8">
            HOME
          </Link>
          <Link href="#" className="py-1 hover:underline underline-offset-8">
            PRODUCT
          </Link>
          <Link href="#" className="py-1 hover:underline underline-offset-8">
            PRICING
          </Link>
          <Link href="#" className="py-1 hover:underline underline-offset-8">
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
          <span
            className={`${
              !isOpen ? "block" : "hidden"
            } w-6 h-0.5 bg-[#1A8CD8] text-3xl`}
          ></span>
          <span
            className={`${
              !isOpen ? "block" : "hidden"
            } w-6 h-0.5 bg-[#1A8CD8] text-3xl`}
          ></span>
          <span
            className={`${
              !isOpen ? "block" : "hidden"
            } w-6 h-0.5 bg-[#1A8CD8] text-3xl`}
          ></span>
          <span
            className={`${isOpen ? "block" : "hidden"} text-3xl text-[#1A8CD8]`}
          >
            X
          </span>
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
