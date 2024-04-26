import React from "react";
import { BsSpotify, BsYoutube } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { InstagramEmbed } from "react-social-media-embed";
import instagramReels from "./hightlightsData.js";

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

      {/* Links */}
      <div className="text-5xl flex justify-center gap-12 py-3 pb-6">
        <a
          href="https://music.apple.com/us/artist/nisharrk/1576125215"
          target="_blank"
        >
          <SiApplemusic />
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
        <a href="https://www.instagram.com/nisharrk/" target="_blank">
          <AiFillInstagram />
        </a>
      </div>

      {/* Highlights section */}
      <div>
        <p className="text-4xl pt-14 pb-4 text-teal-500">Highlights</p>
      </div>
      <div className="lg:flex justify-center py-4">
        {instagramReels.map((reels) => (
          <div key={reels.title} className="px-2 py-2">
            <InstagramEmbed url={reels.url} width={328} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
}
