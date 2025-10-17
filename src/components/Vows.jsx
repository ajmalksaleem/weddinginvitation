import React, { useState } from "react";
import { SendHorizontal } from 'lucide-react';
import { CheckCircle } from "lucide-react";

export default function Wishes() {
  const [form, setForm] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  setLoading(true)
  e.preventDefault();

  // Optional: prevent resubmission while loading
  if (!form.name.trim() || !form.message.trim()) {
    alert("Please fill all fields.");
    setLoading(false)
    return;
  }

  try {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("message", form.message);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxxSg6CGj_bGXD73rbt0nIPCznNYxeC2JC7zIiADhfW62Do8md_FuvJUthCwWStmfATdw/exec",
      {
        method: "POST",
        body: formData
      }
    );

    if (response.ok) {
      console.log("Successfully sent!");
      setSubmitted(true);
      setForm({ name: "", message: "" });
      setLoading(false)
    } else {
      alert("Something went wrong. Please try again.");
      console.error("Response error:", response.statusText);
      setLoading(false)
    }
  } catch (err) {
    alert("Network error. Please check your connection.");
    console.error("Fetch error:", err);
  }
};


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 via-gray-950 to-black text-white px-6 pt-10 pb-20 overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-400/10 blur-3xl rounded-full"></div>
      </div>

      {/* Heading */}
  <h2
  className="relative z-10 text-4xl md:text-7xl font-[400] mb-3 text-center text-pink-300 font-[Great_Vibes]"
>
  Leave Your Wishes
</h2>


      {/* Subtext */}
     {/* Subtext with elegant quotes */}
<p
  className="relative z-10 text-gray-300 text-center mb-4 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto font-[DM_Sans]"
>
  <span className="text-5xl text-pink-400 align-top">“</span>
  <span className="px-2 text-gray-200">
    May every word shared today shine with warmth and grace
  </span>
  <span className="text-5xl text-pink-400 align-bottom">”</span>
</p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-lg bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]"
      >
        {!submitted ? (
          <>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-gray-300 text-sm uppercase tracking-wider"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g., A well-wisher"
                className="w-full bg-transparent border-b border-gray-500 focus:border-pink-400 outline-none py-2 text-white placeholder-gray-400 transition-all duration-300"
              />
            </div>

            <div className="mb-10">
              <label
                htmlFor="message"
                className="block mb-2 text-gray-300 text-sm uppercase tracking-wider"
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write something heartfelt..."
                className="w-full bg-transparent border-b border-gray-500 focus:border-pink-400 outline-none py-2 text-white placeholder-gray-400 transition-all duration-300"
              ></textarea>
            </div>

           <button
  disabled={loading}
  type="submit"
  className={`w-full py-3 rounded-xl text-white font-semibold tracking-wider transition-all duration-300 flex justify-center gap-2
    ${loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-pink-400 to-pink-500 hover:scale-[1.02] hover:shadow-lg"}
  `}
>
  {loading ? (
    "Loading..."
  ) : (
    <>
      Send Wish <SendHorizontal />
    </>
  )}
</button>

          </>
        ) : (
          <div className="text-center py-12 flex flex-col items-center gap-4">
  <CheckCircle className="w-12 h-12 text-green-300 animate-bounce" />
  <p
    className="text-xl text-green-300 font-light"
  >
    Your wish has been sent successfully!
  </p>
</div>
        )}
      </form>

      {/* Slim Footer */}
      <footer className="relative z-10 mt-16 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.instagram.com/ajmale._"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-500 transition-colors duration-300"
        >
          @ajmalksaleem@gmail.com
        </a>
      </footer>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}

