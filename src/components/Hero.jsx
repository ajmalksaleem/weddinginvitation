import React, { useState, useEffect } from "react";
import bg from "../assets/herobg.png";
import redHeart from "../assets/redhart.png";
import { RiArrowDownDoubleFill } from "react-icons/ri";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2025-12-21T12:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      aria-label="Invitation Hero"
    >
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* content */}
      <div className="relative px-6 text-white">
        <p className="text-sm tracking-widest text-gray-300">
          You’re Invited for
        </p>

        <h1
          className="mt-3 text-4xl sm:text-6xl font-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Ajmal K Saleem
        </h1>

        <img
          src={redHeart}
          alt="heart"
          className="w-26 h-26 mx-auto animate-pulse my-2"
        />

        <h2
          className="text-4xl sm:text-6xl font-bold"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Alphia K Shajahan
        </h2>

        {/* Countdown Timer */}
        <div className="mt-14 text-lg sm:text-xl font-semibold text-gray-200">
          We are getting married in
          <div className="mt-2 flex justify-center space-x-4 font-mono">
            <div>
              <span className="text-2xl sm:text-3xl">{timeLeft.days}</span>
              <span className="block text-sm">Days</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl">{timeLeft.hours}</span>
              <span className="block text-sm">Hrs</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl">{timeLeft.minutes}</span>
              <span className="block text-sm">Mins</span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl">{timeLeft.seconds}</span>
              <span className="block text-sm">Secs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <RiArrowDownDoubleFill size={36} />
      </div>
    </section>
  );
}
