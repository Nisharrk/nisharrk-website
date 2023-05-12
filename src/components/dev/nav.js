import React from "react";

export default function Nav() {
  return (
    <nav className="text-white py-10 mb-12 flex justify-between">
      <h1 className="text-2xl font-semibold">Nisharrk</h1>
      <ul className="flex items-center">
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-3"
            href="https://drive.google.com/file/d/115Rtx95mvEkw8Jwi9T1rccmnxU7bDe4V/view?usp=share_link"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
