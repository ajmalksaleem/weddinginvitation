import React from "react";
//import groomImg from "../assets/groombg.png"; // anime version of you
import tuxedoBg from "../assets/groombg.png"; // dark tuxedo/watch background

export default function Groom() {
  return (
    <>
    
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-6 py-12"
      style={{
       backgroundImage: `url(${tuxedoBg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
          <h1 className="font-extrabold mt-5 text-3xl text-center">About Him</h1>
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/70" />

      {/* content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center max-w-5xl">
        
        {/* text side */}
        <div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ajmal K Saleem
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Grandson of <b>Late K.K. Khalid</b> & <b>C M Khaeeja</b>, <br />
            <b>K.M. Abdulkhadar</b> & <b>Aisha</b>
          </p>
          <p className="mt-3 text-gray-200 leading-relaxed">
            Son of <b>Saleem K.K.</b> & <b>Naseera K.A.</b>
          </p>
        </div>

        {/* image side */}
        <div className="flex justify-center">
          <img
           
            alt="Groom"
            className="w-64 h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
    </> 
  );
}
