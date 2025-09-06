import React from "react";
import brideIcon from "../assets/bride.png";   // your bride PNG
import brideBg from "../assets/Bridebg.png"; // background image

export default function Bride() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-start text-white px-6 py-8"
      style={{
        backgroundImage: `url(${brideBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* heading */}
      <h1
        className="relative z-10 text-3xl text-center mt-4 tracking-wide"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        About Her
      </h1>

      {/* content grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center max-w-6xl w-full mt-5">
        {/* bride icon (center on mobile, right on desktop) */}
        <div className="flex justify-center md:justify-start">
          <img
            src={brideIcon}
            alt="Bride"
            className="w-44 sm:w-60"
          />
        </div>

        {/* text side (left on desktop) */}
        <div className="text-center md:text-left space-y-6">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Alphia K Shajahan
          </h2>

          <p className="text-gray-200 leading-relaxed">
            <span className="font-bold text-2xl">Granddaughter of</span>
            <br />
             <b>Hasanar</b> & <b>Khaeeja</b>, <br />
            <b>Pareed Kunj</b> & <b>Sainaba</b>
          </p>

          <p className="text-gray-200 leading-relaxed">
            <span className="font-bold text-2xl">Daughter of</span>
            <br />
            <b>Shajahan K S</b> & <b>Sanooja P P</b>
          </p>

          <p className="text-gray-200 leading-relaxed">
            <span className="font-bold text-2xl">Address</span>
            <br />
            Kunnathanickal House, Athirampuzha P O<br />
            Kottayam
          </p>
        </div>
      </div>
    </section>
  );
}
