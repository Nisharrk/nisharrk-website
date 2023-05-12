import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import myImage from "../../../public/image.png";

export default function Main() {
  return (
    <div className="text-white text-center md:p-10">
      <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
        Nishant Sharma
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl">Full Stack Developer</h3>
      <p className="text-md py-5 leading-8 text-gray-200 md:text-xl max-w-xl mx-auto">
        Developer passionate about creating software solutions that solve
        complex problems and enhance user experiences. Over the years, I have
        developed a keen eye for detail, a strategic mindset, and a talent for
        working collaboratively with teams.
      </p>
      <div className="text-5xl flex justify-center gap-12 py-3 pb-6">
        <a href="https://twitter.com/iamnisharrk" target="_blank">
          <AiFillTwitterCircle />
        </a>
        <a href="https://www.linkedin.com/in/nisharrk/" target="_blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Nisharrk" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full mb-10 w-80 h-80 md:h-96 md:w-96">
        <Image src={myImage} alt="Image" />
      </div>
    </div>
  );
}
