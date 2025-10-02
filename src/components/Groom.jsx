import React from "react";
import groomImg from "../assets/groom.png";
import groomBg from "../assets/groombg.jpg";
import brideIcon from "../assets/bride.png";
import bush from "../assets/tree.png";
import leaf from "../assets/leaf.png";
import Bee from "./Bee"

export default function Groom() {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 py-8 overflow-hidden"
      style={{
        backgroundImage: `url(${groomBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/80" />

      {/* decorative bush above About Him */}
<img
  src={bush}
  alt="Branch Decoration"
  className="absolute -top-[90px] md:-top-[360px] left-[20%] w-[140%] h-auto z-30 pointer-events-none"
    style={{ transform: "rotate(50deg)" }}
/>


     {/* Falling Leaves */}
<img
  src={leaf}
  alt="Leaf"
  className="absolute top-[50px] left-[20%] w-5 sm:w-8 animate-leaf-fall z-20"
  style={{ animationDelay: "0s" }}
/>
<img
  src={leaf}
  alt="Leaf"
  className="absolute top-[50px] left-[50%] w-5 sm:w-8 animate-leaf-fall z-20"
  style={{ animationDelay: "3s" }}
/>
<img
  src={leaf}
  alt="Leaf"
  className="absolute top-[50px] left-[75%] w-5 sm:w-9 animate-leaf-fall z-20"
  style={{ animationDelay: "6s" }}
/>



      {/* heading */}
      <h1
        className="relative z-10 text-3xl sm:text-4xl text-center text-black mt-24 tracking-wide"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        About Him
      </h1>

      {/* centered flex box */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-4 sm:gap-8 max-w-4xl w-full mt-6 mx-auto">
        {/* groom image */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={groomImg}
            alt="Groom"
            className="w-40 sm:w-56 md:w-64 lg:w-64"
          />
        </div>

        {/* text side */}
        <div className="flex-1 text-left space-y-4 sm:space-y-6 ">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ajmal K Saleem
          </h2>

          <p className="text-black text-sm sm:text-base leading-relaxed italic">
            <span className="font-semibold text-2xl ">Grandson of</span> <br />
            <b>K.K. Khalid</b> & <b>C.M. Khadeeja</b>, <br />
            <b>K.M. Abdulkhader</b> & <b>Aisha</b>
          </p>

          <p className="text-black text-sm sm:text-base leading-relaxed italic">
            <span className="font-semibold text-2xl">Son of</span> <br />
            <b>Saleem K.K.</b> & <b>Naseera K.A.</b>
          </p>

          <p className="text-black text-sm sm:text-base leading-relaxed italic">
            <span className="font-semibold text-lg">Address</span> <br />
            Kallarackal House, Naduvath Nagar P.O, <br />
            Vaduthala, Arookutty, Alappuzha <br /> PIN: 688526
          </p>
        </div>
      </div>

      {/*//////////// BRIDE SECTION /////////////////*/}

      {/* heading */}
      <h1
        className="relative z-10 text-3xl sm:text-4xl text-center text-black mt-24 tracking-wide"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        About Her
      </h1>

      {/* centered flex box */}
      <div className="relative z-10 flex flex-row items-center justify-center gap-4 sm:gap-8 max-w-4xl w-full mt-6 mx-auto">
        {/* bride image */}
        <div className="flex-shrink-0 relative flex justify-center">
          <img
            src={brideIcon}
            alt="Bride"
            className="w-40 sm:w-56 md:w-64 lg:w-64"
          />
           <Bee style={{ position: "absolute", top: "10%", left: "78%" }} />
        </div>

        {/* text side */}
        <div className="flex-1 text-left space-y-4 sm:space-y-6 ">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Alphia K Shajahan
          </h2>

          <p className="text-black text-sm sm:text-base leading-relaxed italic">
            <span className="font-semibold text-xl ">Granddaughter of</span>{" "}
            <br />
            <b>Hasanar</b> & <b>Khadeeja</b>, <br />
            <b>Pareed Kunj</b> & <b>Sainaba</b>
          </p>

          <p className="text-black text-sm sm:text-base leading-relaxed italic">
            <span className="font-semibold text-2xl">Daughter of</span> <br />
            <b>Shajahan K S</b> & <b>Sanooja P P</b>
          </p>

          <p className="text-black text-sm sm:text-base leading-relaxed italic">
            <span className="font-semibold text-lg">Address</span> <br />
            Kunnathanickal House, Athirampuzha P O
            <br /> Kottayam
          </p>
        </div>
      </div>
    </section>
  );
}

