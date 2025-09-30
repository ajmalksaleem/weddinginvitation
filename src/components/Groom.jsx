import React from "react";
import groomImg from "../assets/groom.png";   // the PNG you uploaded
import groomBg from "../assets/groombg.png"; // background image (can change later)

export default function Groom() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-start text-white px-6 py-8"
      style={{
        backgroundImage: `url(${groomBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* heading */}
      <h1
        className="relative z-10 text-3xl text-center mt-4 tracking-wide"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        About Him
      </h1>

      {/* content grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center max-w-6xl w-full mt-5">
        {/* groom image (center on mobile, left on desktop) */}
        <div className="flex justify-center md:justify-end">
          <img
            src={groomImg}
            alt="Groom"
            className="w-44 sm:w-60"
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
            <b>K.K. Khalid</b> & <b>C.M. Khadeeja</b>, <br />
            <b>K.M. Abdulkhader</b> & <b>Aisha</b>
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
