import React from "react";
import Nav from "@/src/components/dev/nav";
import Main from "@/src/components/dev/main";
import Portfolio from "@/src/components/dev/portfolio";
import Skills from "@/src/components/dev/skills";
import Footer from "@/src/components/dev/footer";

export default function Dev() {
  return (
    <div className="bg-black min-h-screen  px-10 md:px-20 lg:px-40">
      <section>
        <Nav />
        <Main />
        <Portfolio />
        <Skills />
        <Footer />
      </section>
    </div>
  );
}
