import React from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { SiItunes } from "react-icons/si";

export default function Main() {
  return (
    <div className="text-white text-center md:p-10">
      <h2 className="text-6xl py-2 text-teal-500 font-medium md:text-6xl">
        Nisharrk
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl">
        Singer, Songwriter and producer
      </h3>
      <p className="text-lg py-5 leading-8 text-gray-200 md:text-xl max-w-xl mx-auto">
        A guy exploring the world of music.
      </p>
      <div className="text-5xl flex justify-center gap-12 py-3 pb-6">
        <a
          href="https://music.apple.com/us/artist/nisharrk/1576125215"
          target="_blank"
        >
          <SiItunes />
        </a>
        <a
          href="https://open.spotify.com/artist/7LCVNxVZhlNd2jElB8mxaF?si=914MgLFDTvCIPioXUsNO5A"
          target="_blank"
        >
          <BsSpotify />
        </a>
        <a
          href="https://www.youtube.com/channel/UC-sre35Os82TzsjV2eBHEkw"
          target="_blank"
        >
          <BsYoutube />
        </a>
      </div>
    </div>
  );
}
