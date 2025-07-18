import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative max-w-7xl mx-auto my-20 p-10 rounded-xl overflow-hidden shadow-xl bg-white">
      {/* Split background effect */}
      <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-b from-[#00b894] to-[#3c9d9b] opacity-10 pointer-events-none -z-10"></div>

      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Image with layered shadows and tilt hover effect */}
        <div className="relative w-full max-w-md rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-400 hover:scale-105 hover:-rotate-3">
          <Image
            src="/about1.jpg"
            alt="About Us"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg drop-shadow-lg">
            Our Commitment
          </div>
        </div>

        {/* Text content */}
        <div className="max-w-xl">
          <h1 className="relative mb-6 text-4xl md:text-5xl font-extrabold text-[#056f69] tracking-tight">
            About Us
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-gradient-to-r from-[#00b894] to-[#00ffc6] rounded-full animate-underline" />
          </h1>

          <p className="mb-6 text-2xl font-semibold leading-snug text-gray-700">
            Welcome to <span className="text-[#00b894]">HealthConnect</span>,
            your premier destination for all things healthcare and blood
            donation.
          </p>

          <blockquote className="mb-8 pl-6 border-l-4 border-[#00b894] italic text-gray-600 text-lg leading-relaxed tracking-wide drop-shadow-sm">
            “Compassion drives us to empower healthier lives by connecting
            donors and recipients in a seamless, caring platform.”
          </blockquote>

          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            At HealthConnect, compassion and well-being are at the core of what
            we do. Our intuitive platform ensures seamless access to resources,
            empowering healthier lives.
          </p>

          <p className="mb-10 text-lg leading-relaxed text-gray-700">
            We are dedicated to ensuring your well-being and contributing to a
            thriving community. Your health and care are our priority.
          </p>

          <button
            type="button"
            className="inline-block bg-gradient-to-r from-[#00b894] to-[#00ffc6] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
            aria-label="Learn more about HealthConnect"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Extra styling for underline animation */}
      <style jsx>{`
        .animate-underline {
          animation: underline-slide 2.5s ease-in-out infinite alternate;
        }
        @keyframes underline-slide {
          0% {
            transform: translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateX(40%);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
