

import React from "react";
import { CarFront, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-[#ffefba] to-[#ffffff] text-black"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        FASTag Recharge Made Easy 🚗
      </h1>

      <p className="text-lg mb-8 max-w-md text-gray-700">
        Recharge your vehicle FASTag in seconds — safe, secure, and instant.
      </p>

      <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-3 w-[90%] md:w-auto">
       
       

        <div className="flex items-center gap-2 text-gray-700 w-full md:w-auto">
          <CarFront className="text-cyan-700" />
          <input
            type="text"
            placeholder="Enter Vehicle Number"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-600"
          />
        </div>

  
  

  
        <button className="px-6 py-2 bg-cyan-700 text-white font-semibold rounded-lg hover:bg-cyan-800 transition flex items-center gap-2">
          <CreditCard size={18} />
          Recharge Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
