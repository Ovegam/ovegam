import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex h-[100%] flex-col items-center justify-center p-24">
      <div className="flex flex-row justify-evenly w-[100%] gap-20">
        <div className="w-1/2 space-y-5 items-center">
          <h1 className="text-[#1A8CD8] font-extrabold text-4xl italic">
            Effortless secure API's
          </h1>
          <h1 className="text-xl">
            Ovegam is a{" "}
            <span className="font-extrabold italic text-[#1A8CD8]">
              No code
            </span>{" "}
            platform to build secure APIs on the fly.
          </h1>
          <h1 className="text-xl">
            Absolutely <span className="font-extrabold italic text-[#1A8CD8]">
              No coding
            </span>{" "}
          </h1>
          <div className="flex flex-row items-center justify-start gap-5 w-[100%]">
          <span className="border-[#1A8CD8] border-[1px] px-5 py-1 mt-10 rounded-full text-center hover:bg-[#1A8CD8] hover:text-white">
            GET STARTED
          </span>
          <span className="border-[#1A8CD8] border-[1px] px-5 py-1 mt-10 rounded-full text-center hover:bg-[#1A8CD8] hover:text-white">
            LIVE DEMO
          </span>
          </div>
        </div>
        <div className="bg-green-100 w-1/2">hi</div>
      </div>
    </main>
  );
}
