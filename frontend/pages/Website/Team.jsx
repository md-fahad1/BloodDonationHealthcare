import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "MD FAHAD KHAN",
      role: "User",
      bio: "Enthusiastic learner with a strong passion for building intuitive digital experiences and solving real-world problems.",
      imageUrl: "/fahad.jpg",
    },
    {
      name: "MD. GOLAM RABBANI RAFI",
      role: "Admin",
      bio: "Strategic thinker and results-driven admin with a focus on growth, scalability, and seamless user experience.",
      imageUrl: "/rafi.jpeg",
    },
    {
      name: "MD RAKIBUL ISLAM",
      role: "Service Provider",
      bio: "Dedicated to providing top-notch services with reliability and customer satisfaction as top priority.",
      imageUrl: "/Rijom.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#f0f4f8] to-[#e2ecf1] py-16 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        Meet Our Awesome Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="group bg-white shadow-lg rounded-3xl p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-green-400 shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-sm px-4 py-1 rounded-full mb-2">
                {member.role}
              </span>
              <p className="text-gray-600 text-sm">{member.bio}</p>

              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-blue-700 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
