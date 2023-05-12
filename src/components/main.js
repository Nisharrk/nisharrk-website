import React from "react";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-row justify-center items-stretch bg-black min-h-screen">
      <div className="w-1/2 flex items-center justify-center border-r-2 border-white hover:bg-white text-3xl font-bold text-white hover:text-black">
        <Link legacyBehavior href="/dev">
          <a className="w-full h-full flex items-center justify-center">
            nisharrk.dev
          </a>
        </Link>
      </div>
      <div className="w-1/2 flex items-center justify-center hover:bg-white text-3xl font-bold text-white hover:text-black">
        <Link legacyBehavior href="/music">
          <a className="w-full h-full flex items-center justify-center">
            nisharrk.mp3
          </a>
        </Link>
      </div>
    </div>
  );
}
