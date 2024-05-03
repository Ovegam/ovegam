import Image from "next/image";
import "./globals.css";
export default function Home() {
  return (
    <main className="flex h-[100%] w-[100%] flex-col items-center justify-center px-24 py-12">
      <div className="flex flex-col md:flex-row justify-evenly w-[100%] gap-20 mt-28">
        <div className="lg:w-1/2 space-y-5 items-center">
          <h1 className="text-[#1A8CD8] font-extrabold text-3xl">
            Effortless secure API's
          </h1>
          <h1 className="text-lg">
            Ovegam is a{" "}
            <span className="font-extrabold italic text-[#1A8CD8]">
              No code
            </span>{" "}
            platform to build secure APIs on the fly.
          </h1>
          <h1 className="text-lg">
            We understand the importance of APIs in today’s digital world,
            acting as the building blocks that connect different software
            applications. Our platform makes API development straightforward and
            hassle-free, allowing developers to focus on creating innovative
            solutions in simple steps.
          </h1>
          <h1 className="text-lg italic font-extrabold">
            "Experience the simplicity of API development like never before"
          </h1>
          <div className="flex flex-row items-center justify-start gap-5 w-[100%]">
            <span className="border-[#1A8CD8] border-[1px] px-4 mt-5 py-1 rounded-full text-center hover:bg-[#1A8CD8] hover:text-white">
              GET STARTED
            </span>
            <span className="border-[#1A8CD8] border-[1px] px-5 mt-5 py-1 rounded-full text-center hover:bg-[#1A8CD8] hover:text-white">
              LIVE DEMO
            </span>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-start gap-5 border-dashed border-[2px] p-4">
          <div className="text-[#1A8CD8] font-extrabold text-3xl">
            Build APIs in 3 simple steps
          </div>
          <div className="flex flex-col w-[100%] h-[100%] gap-5 md:justify-around">
            <div className="flex flex-row justify-normal w-[100%] gap-10 mx-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 fill-[#1A8CD8]"
              >
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
              </svg>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xl text-[#1A8CD8]">
                  STEP 1
                </span>
                <span className="font-bold">Connect your database</span>
              </div>
            </div>
            <div className="flex flex-row justify-normal w-[100%] gap-10 mx-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 fill-[#1A8CD8]"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>

              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xl text-[#1A8CD8]">
                  STEP 2
                </span>
                <span className="font-bold">Write your database query</span>
              </div>
            </div>
            <div className="flex flex-row justify-normal w-[100%] gap-10 mx-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 fill-[#1A8CD8]"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clip-rule="evenodd"
                />
              </svg>

              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-xl text-[#1A8CD8]">
                  STEP 3
                </span>
                <span className="font-bold">
                  Just click Save, boom your API is ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
