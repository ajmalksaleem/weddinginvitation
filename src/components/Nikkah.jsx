import React from "react";
import nikahBg from "../assets/nikahBg.jpg"; // add a nice Islamic/dark theme background

export default function Nikkah() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-screen flex flex-col items-center justify-start text-white px-6 py-10"
      style={{
        backgroundImage: `url(${nikahBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* heading */}
      <h1
        className="relative z-10 text-3xl sm:text-4xl text-center mb-6"
        style={{ fontFamily: "'Kaushan Script', cursive" }}
      >
        Nikkah Ceremony
      </h1>

      {/* venue details */}
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

      {/* google maps */}
      <div className="relative z-10 w-full max-w-3xl mt-8 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Nikkah Venue Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.1653793138685!2d76.54042369999999!3d9.666906899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07d49b2612e805%3A0x8d12434175d860cf!2z4LS44LWG4LSo4LWN4LSx4LWNIOC0ruC1h-C0sOC1gOC0uOC1jSDgtKrgtL7gtLDgtL_gtLfgtY0g4LS54LS-4LW-!5e0!3m2!1sml!2sin!4v1757149929431!5m2!1sml!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
