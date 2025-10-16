import React from "react";
import Hero from "./components/Hero";
import Groom from "./components/Groom";
import Nikkah from "./components/Nikkah";
import Vows from "./components/Vows";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Hero />
      <Groom/>
      <Nikkah/>
      <Vows/>
    </div>
  );
}

export default App;