import React from "react";
import Header from "../components/Header.jsx";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen text-gray-800">

      <Header />

      <div className="max-w-5xl mx-auto px-4">

        {/* 🔥 Hero Section */}
        <div className="text-center mt-12 mb-12">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Built with passion. Powered by AI. Designed for smarter financial decisions 🚀
          </p>
        </div>

        {/* 💡 Story */}
        <div className="relative mb-8 fade-in-up delay-1">
          <div className="absolute inset-0 bg-purple-200 blur-2xl opacity-20 rounded-xl"></div>

          <div className="relative bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                💡
              </div>
              <h2 className="text-xl font-semibold text-purple-700">Our Story</h2>
            </div>

            <p className="text-gray-600">
              Finsight is a project built by a group of passionate developers and it all started with a simple question — 
              “Where does all my money go?” As students managing limited budgets, we often found ourselves confused and overwhelmed. 
              So we decided to build something that could help not just us, but anyone trying to take control of their finances. 
              That’s Finsight came to life.
            </p>

            <p className="text-gray-500 mt-4 italic">
              We didn’t just build this project — we built something we personally needed.
            </p>

          </div>
        </div>

        {/* 👨‍💻 Team */}
        <div className="relative mb-8 fade-in-up delay-2">
          <div className="absolute inset-0 bg-purple-200 blur-2xl opacity-20 rounded-xl"></div>

          <div className="relative bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                👨‍💻
              </div>
              <h2 className="text-xl font-semibold text-purple-700">Our Team</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {[
                { name: "Raviraj Khot",  },
                { name: "Nidhi Mane",  },
                { name: "Mehek Khan",  }
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-xl p-5 text-center 
                             hover:scale-105 hover:shadow-xl transition duration-300"
                >
                  <div className="w-14 h-14 mx-auto flex items-center justify-center 
                                  bg-purple-200 text-purple-700 rounded-full text-xl mb-2">
                    👤
                  </div>
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 🚀 Vision */}
        <div className="relative mb-12 fade-in-up delay-3">
          <div className="absolute inset-0 bg-purple-200 blur-2xl opacity-20 rounded-xl"></div>

          <div className="relative bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                🚀
              </div>
              <h2 className="text-xl font-semibold text-purple-700">Our Vision</h2>
            </div>

            <p className="text-gray-600">
              Our goal is to combine finance tracking with AI to help users make smarter financial decisions effortlessly.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;