import React from "react";
import tuxedoIcon from "../assets/tuxedo.png"; // your tuxedo PNG
import tuxedoBg from "../assets/groombg.png";  // background image

export default function Groom() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start text-white px-6 py-8"
      style={{
        backgroundImage: `url(${tuxedoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* heading */}
      <h1
        className="relative z-10 text-2xl sm:text-2xl text-center mt-6 tracking-wide"
       
      >
        About Him
      </h1>

      {/* content grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-2 items-center max-w-6xl w-full mt-10">
        {/* tuxedo image (center on mobile, left on desktop) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={tuxedoIcon}
            alt="Tuxedo"
            className="w-32 sm:w-60 invert brightness-0"
          />
        </div>

        {/* text side (right on desktop) */}
        <div className="text-center md:text-left space-y-6">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ajmal K Saleem
          </h2>

          <p className="text-gray-200 leading-relaxed">
            <span className="font-bold text-2xl">Grandson of</span>
            <br />
            Late <b>K.K. Khalid</b> & <b>C.M. Khaeeja</b>, <br />
            <b>K.M. Abdulkhadar</b> & <b>Aisha</b>
          </p>

          <p className="text-gray-200 leading-relaxed">
            <span className="font-bold text-2xl">Son of</span>
            <br />
            <b>Saleem K.K.</b> & <b>Naseera K.A.</b>
          </p>

          <p className="text-gray-200 leading-relaxed">
            <span className="font-bold text-2xl">Address</span>
            <br />
            Kallarackal House, Naduvath Nagar P.O, <br />
            Vaduthala, Arookutty, Alappuzha <br />
            PIN: 688526
          </p>
        </div>
      </div>
    </section>
  );
}
