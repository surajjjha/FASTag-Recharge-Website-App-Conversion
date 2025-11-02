import React from "react";
import aboutImg from "../assets/aboutag.jpg"; 

const About = () => {
  return (
    <section id="about" className="py-16 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
        
       
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold text-[#1f4037] mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="font-semibold text-[#1f4037]">Logiclead</span>, 
            your trusted platform for FASTag recharge. We make it easy for vehicle owners to 
            recharge their FASTag quickly and securely from anywhere.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to save your time at toll plazas by providing a smooth recharge 
            experience with multiple payment options. With reliable service, exciting offers, 
            and dedicated support, we are here to make your travel easier and more convenient.
          </p>
        </div>

    
        <div className="flex-1 flex justify-center">
          <img
            src={aboutImg}
            alt="About FASTag"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
