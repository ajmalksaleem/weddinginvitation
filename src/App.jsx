import React from "react";
import Hero from "./components/Hero";
import Groom from "./components/Groom";
import Bride from "./components/Bride"
import Nikkah from "./components/Nikkah";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Hero />
      <Groom/>
      <Bride/>
      <Nikkah/>
    </div>
  );
}

export default App;