import React from "react";
import hallPng from "../assets/marriageHall.png";
import sunPng from "../assets/sun.png";
import cloudPng from "../assets/cloud.png";
import nightSky from "../assets/nightSky.jpg";
import moonPng from "../assets/moon.png";
import starPng from "../assets/star.png";
import receptionHallPng from "../assets/receptionHall.png";

export default function Nikkah() {
  return (
    <>
      {/* --- Nikkah Section --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-start text-white px-6 py-10 bg-gradient-to-b from-sky-600 to-black overflow-hidden">
        {/* Animated Sky Elements */}
        <img
          src={sunPng}
          alt="Sun"
          className="absolute top-10 left-1/2 -translate-x-1/2 w-20 sm:w-28 animate-pulse"
        />
        <img
          src={cloudPng}
          alt="Cloud"
          className="absolute top-20 left-10 w-28 animate-cloud"
        />
        <img
          src={cloudPng}
          alt="Cloud"
          className="absolute top-24 right-10 w-36 animate-cloud-slow opacity-80"
        />

        {/* Marriage Hall */}
        <div className="relative mt-32 z-10">
          <img
            src={hallPng}
            alt="Marriage Hall"
            className="w-[350px] sm:w-[600px] mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Heading */}
        <h1
          className="relative z-10 text-3xl sm:text-4xl text-center mt-6 mb-6"
          style={{ fontFamily: "'Kaushan Script', cursive" }}
        >
          Nikkah Ceremony
        </h1>

        {/* Venue Details */}
        <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-xl w-full text-center space-y-4">
          <p className="text-lg">
            <span className="font-bold text-xl">Date & Time:</span>
            <br />
            21st December 2025, 12:30 PM
          </p>
          <p className="text-lg">
            <span className="font-bold text-xl">Venue:</span>
            <br />
            St. Mary&apos;s Parish Hall, Athirampuzha
          </p>
        </div>

        {/* Google Maps */}
        <div className="relative z-10 w-full max-w-3xl mt-10 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/20 backdrop-blur-md hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300">
          <iframe
            title="Nikkah Venue Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1653793138685!2d76.54042369999999!3d9.666906899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d49b2612e805%3A0x8d12434175d860cf!2z4LS44LWG4LSo4LWN4LSx4LWNIOC0ruC1h-C0sOC1gOC0uOC1jSDgtKrgtL7gtLDgtL_gtLfgtY0g4LS54LS-4LW-!5e0!3m2!1sml!2sin!4v1757149929431!5m2!1sml!2sin"
            width="100%"
            height="300"
            style={{
              border: 0,
              filter: "grayscale(20%) brightness(95%)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* --- Reception Section --- */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-start text-white px-6 py-16 bg-black overflow-hidden"
        style={{
          backgroundImage: `url(${nightSky})`,
          backgroundSize: "contain",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90"></div>

        {/* Animated Moon */}
        <img
          src={moonPng}
          alt="Moon"
          className="absolute top-20 right-[15%] w-24 sm:w-32 animate-moon-float opacity-95 z-10"
        />

        {/* Stars */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <img
              key={i}
              src={starPng}
              alt="Star"
              className={`absolute w-5 opacity-70 animate-twinkle`}
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Shooting Star */}
        <div className="absolute shooting-star top-[20%] left-[10%]"></div>

        {/* Reception Hall */}
        <div className="relative mt-32 z-10">
          <img
            src={receptionHallPng}
            alt="Reception Hall"
            className="w-[350px] sm:w-[600px] mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Reception Text */}
        <div className="relative z-10 text-center max-w-2xl mt-10 space-y-6">
          <h1
            className="text-4xl sm:text-5xl font-semibold"
            style={{ fontFamily: "'Kaushan Script', cursive" }}
          >
            Wedding Reception
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-gray-200">
            Join us for a night under the stars, celebrating love, laughter, and
            togetherness.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-6">
            <p className="text-lg">
              <span className="font-bold text-xl">Date & Time:</span>
              <br />
              21st December 2025, From 6:30 PM
            </p>
            <p className="text-lg mt-4">
              <span className="font-bold text-xl">Venue:</span>
              <br />
              Naduvathul Islam English medium school ground
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
