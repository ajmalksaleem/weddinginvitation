import React from "react";
import heartSvg from "../assets/redhart.png";
import paperRocket from "../assets/paper-rocket.png";
import backgroundImg from "../assets/wedding-bg.jpg";

export default function Reflections() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      
      {/* heading */}
      <h2
        className="text-3xl md:text-5xl font-bold mb-12 text-center text-white drop-shadow-lg z-20"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Reflections
      </h2>

      {/* heart divider */}
      <img
  src={heartSvg}
  className="w-20 mb-10 animate-bounceHeart drop-shadow-lg z-20 filter brightness-0 invert"
  alt="heart"
/>

      {/* quotes container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl z-20">
        {/* Ajmal */}
        <div className="relative bg-white/80 backdrop-blur-md border border-amber-200 rounded-3xl p-8 md:p-10 max-w-sm text-center shadow-xl hover:shadow-2xl transition-all duration-500">
          <p
            className="text-gray-800 italic leading-relaxed text-lg"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ <br />
            Marriage is not merely the union of two hearts, but the joining of two families and the completion of one’s faith. For indeed, <span className="text-red-800">“And We created you in pairs” — [Surah An-Naba, 78:8].</span> <br />
            May this bond be filled with mercy, peace, and divine blessings.
          </p>
          <p className="mt-5 text-rose-600 font-semibold text-right text-lg">
            — Ajmal
          </p>
        </div>

        {/* Alphia */}
        <div className="relative bg-white/80 backdrop-blur-md border border-amber-200 rounded-3xl p-8 md:p-10 max-w-sm text-center shadow-xl hover:shadow-2xl transition-all duration-500">
          <p
            className="text-gray-800 italic leading-relaxed text-lg"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            “May our souls intertwine like stars — distant yet eternally shining for each other.”
          </p>
          <p className="mt-5 text-rose-600 font-semibold text-right text-lg">
            — Alphia
          </p>
        </div>
      </div>

      {/* rockets moving diagonally in spiral */}

      {/* floating animation keyframes */}
      <style>{`

        @keyframes bounceHeart {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15%); }
        }

        .animate-bounceHeart {
          animation-name: bounceHeart;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
}
