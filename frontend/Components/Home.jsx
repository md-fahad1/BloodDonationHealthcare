// // Importing images in Next.js
// import DisplayImage from "../public/home2.jpg";
// import Image from "next/image";
// const Home1 = () => {
//   return (
//     <div className="relative flex items-center">
//       <div className="flex-shrink-0 w-full h-[87vh] bg-cover bg-center   bg-gradient-to-r from-[#43869c] to-[#52bbde]"></div>

//       <div className="absolute inset-0 flex items-center ml-36">
//         <div className="p-8 w-[500px] text-[#FFFFFF] text-left ">
//           <h6 className="text-3xl font-bold mb-2">Save a Life</h6>
//           <h1 className="text-5xl font-bold mb-4">
//             Donate blood & Help the poor
//             <br />
//             Enjoy you life.. <br />
//           </h1>
//           <h6>
//             "Small acts of kindness make a big difference — donate and make an
//             impact."
//           </h6>
//           <button className="bg-[#73b5b7] hover:bg-blue-600 mt-5 text-white px-4 py-2 rounded flex items-center">
//             Explore <span className="ml-2">→</span>
//           </button>
//         </div>

//         <div className="flex-shrink-0 w-[478px] h-[478px] overflow-hidden ">
//           <Image
//             src="/home.png" // Adjust the path based on your project structure
//             alt="Manager"
//             className="w-full h-full object-cover "
//             width={400} // Set your desired width
//             height={400} // Set your desired height
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home1;

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeartbeat, FaUsers, FaHandsHelping } from "react-icons/fa";

const typingText = `“Small acts of kindness make a big difference — donate and make an impact.”`;

function TypingEffect({ text, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <p className="italic border-l-4 border-white pl-4 text-md md:text-lg mb-8 drop-shadow-lg">
      {displayedText}
    </p>
  );
}

const Home1 = () => {
  // Controls for scroll parallax effect on bubbles
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-br from-[#43869c] to-[#52bbde] text-white overflow-hidden min-[80vh] flex flex-col justify-center"
      aria-label="Blood donation hero section"
    >
      {/* Soft spotlight behind text */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00b894]/40 to-transparent pointer-events-none -z-10" />

      {/* Animated bubbles with parallax effect */}
      <motion.div
        style={{ y: scrollY * 0.2 }}
        className="absolute top-5 left-10 w-12 h-12 bg-white/20 rounded-full blur-2xl animate-bounce-slow"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: scrollY * -0.15 }}
        className="absolute top-1/2 right-20 w-16 h-16 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: scrollY * 0.12 }}
        className="absolute bottom-20 left-1/3 w-20 h-20 bg-white/10 rounded-full blur-3xl animate-bounce-slower"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 py-8 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text with animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          {/* Main headline with animated gradient shimmer */}
          <h2
            className="text-3xl md:text-6xl font-bold leading-tight mb-5 font-Poppins relative inline-block"
            tabIndex={0}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-gradient-to-r from-[#00ffbb] via-[#00b894] to-[#00ffc6] bg-[length:200%_200%] bg-clip-text text-transparent block"
            >
              <span className="flex items-center gap-3">
                <FaHeartbeat className="text-red-400 animate-pulse" size={40} />
                Donate Blood
              </span>
            </motion.span>
            <span className="relative text-[#dff9fb] z-10 block mt-2">
              Save a Life
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#00b894] rounded-full opacity-70 blur-sm"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed drop-shadow-lg">
            Your contribution can bring hope and healing. Join us in creating a
            healthier, stronger community by giving the gift of life.
          </p>

          {/* Typing effect quote */}
          <TypingEffect text={typingText} speed={30} />

          {/* Button with bounce + glow on hover */}
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00ffbb" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/Website/About"
              className="inline-block bg-gradient-to-r from-[#00b894] to-[#00ffc6] text-white transition px-8 py-4 rounded-full shadow-lg font-semibold text-lg drop-shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00ffbb]"
              aria-label="Explore more about blood donation"
            >
              Explore More →
            </Link>
          </motion.div>

          {/* Social proof stats */}
          <div className="flex gap-8 mt-10 text-[#b0f7e3] font-medium select-none">
            <div className="flex items-center gap-2">
              <FaUsers size={28} />
              <span>10k+ Donors</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeartbeat size={28} />
              <span>5000+ Lives Saved</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHandsHelping size={28} />
              <span>50+ Partners</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Hero Image with overlay + glow */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden shadow-2xl border-4 border-[#00b894] drop-shadow-lg"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00b894aa] to-transparent pointer-events-none rounded-xl mix-blend-overlay" />
          <Image
            src="/home.png"
            alt="Blood Donation Hero"
            width={450}
            height={450}
            className="object-contain relative z-10"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Home1;
