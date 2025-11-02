import React from "react";
import bannerImg from "../assets/footertag.png"; 

const RechargeBanner = () => {
  return (
    <section className="relative w-full bg-base-200">
      <img
        src={bannerImg}
        alt="FASTag Recharge Banner"
        className="w-full h-auto object-cover"
      />
      
    </section>
  );
};

export default RechargeBanner;
