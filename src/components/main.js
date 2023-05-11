import React from "react";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-row justify-center items-center bg-black">
      <div className="w-1/2 min-h-screen flex items-center justify-center border-r-2 border-white hover:bg-white text-3xl font-bold text-white hover:text-black">
        nisharrk.dev
      </div>
      <div className="w-1/2 min-h-screen flex items-center justify-center hover:bg-white text-3xl font-bold text-white hover:text-black">
        nisharrk.mp3
      </div>
    </div>
  );
}
