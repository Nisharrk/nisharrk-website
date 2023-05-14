import Link from "next/link";
import React from "react";
import Nav from "../src/components/music/nav";
import Main from "@/src/components/music/main";

export default function Music() {
  return (
    <div className="bg-black min-h-screen  px-10 md:px-20 lg:px-40">
      <section>
        <Nav />
        <Main />
      </section>
    </div>
  );
}
