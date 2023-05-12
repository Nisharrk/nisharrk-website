import Link from "next/link";
import React from "react";

export default function Music() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-2xl font-bold justify-center items-center text-white">
      <p>On the Way :)</p>
      <p>
        Till then, chech out my music{" "}
        <a href="https://linktr.ee/nisharrk" className="text-teal-500">
          here.
        </a>
      </p>
    </div>
  );
}
