import React from "react";
import Nav from "@/src/components/dev/nav";
import Main from "@/src/components/dev/main";
import Portfolio from "@/src/components/dev/portfolio";

export default function Dev() {
  return (
    <div className="bg-black min-h-screen pb-10 px-10 md:px-20 lg:px-40">
      <section>
        <Nav />
        <Main />
        <Portfolio />
      </section>
    </div>
  );
}
