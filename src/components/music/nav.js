import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="text-white py-10 mb-12 flex justify-between">
      <Link href="/">
        <h1 className="text-2xl font-semibold">Nisharrk</h1>
      </Link>
      <ul className="flex items-center">
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 pt-3 rounded-md ml-3  hover:rounded-lg"
            href="https://linktr.ee/nisharrk"
            target="_blank"
          >
            Linktr.ee
          </a>
        </li>
      </ul>
    </nav>
  );
}
