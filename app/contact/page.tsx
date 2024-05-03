import "@/app/globals.css";
export default function Contact() {
  return (
    <main className="h-[100%] w-[100%] px-12 py-6 md:px-24">
      <div className="grid grid-cols-3 grid-rows-4 h-[100%] w-[100%] md:mt-28">
        <div className="col-span-3 mb-3">
          <div className="grid grid-rows-3 md:grid-rows-3">
            <span className="text-[rgb(26,140,216)] font-extrabold text-xl md:text-2xl">
              Contact Us
            </span>
            <span className="font-semibold text-sm md:text-lg">
              We love questions and feedback - and we're always happy to help!
            </span>
            <span className="font-semibold text-sm md:text-lg">
              Here are someways to Contact us.
            </span>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 row-span-3 border-2 border-dashed shadow-md shadow-[#1A8CD8] border-[#1A8CD8] opacity-50">
          LEFT
        </div>
        <div className="mt-3 md:mt-0 col-span-3 md:col-span-1 row-span-3 border-2 border-dashed shadow-md shadow-[#1A8CD8] border-[#1A8CD8] opacity-50">
          <div className="grid grid-cols-3 m-5 divide-y-2">
            <span className="text-[rgb(26,140,216)] font-extrabold text-xl md:text-2xl text-center pb-3 col-span-3">
              Contact Information
            </span>
            <div className="grid grid-cols-2  grid-rows-3 col-span-3 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 bg-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="bg-red-200">Contact Information</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 bg-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="bg-red-200">Contact Information</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 bg-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="bg-red-200">Contact Information</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
