"use client";

import "../src/app/globals.css";
import NavBar from "@/app/NavBar/page";

export default function inspiration() {
  return (
    <>
      <NavBar />
      <div className="hidden md:block px-8">
        <div className="text-3xl pb-4 text-semibold">Resume:</div>
        <div className="flex justify-center max-w-5/6">
          <iframe
            src="https://onedrive.live.com/embed?resid=9DAD113EA6F3E1F8%2112589&authkey=!ANV9t3ONA97Z6WU&em=2"
            width="1536"
            height="864"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <div className="block md:hidden px-2">
        <div className="text-xl pb-4 text-semibold">Resume:</div>
        <div className="flex justify-center">
          <iframe
            src="https://onedrive.live.com/embed?resid=9DAD113EA6F3E1F8%2112589&authkey=!ANV9t3ONA97Z6WU&em=2"
            width="476"
            height="575"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  );
}
