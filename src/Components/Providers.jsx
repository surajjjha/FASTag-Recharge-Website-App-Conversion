

import React from "react";
import fastagLogo from "../assets/fastag.jpeg"; 

const providers = [
  { name: "Paytm FASTag" },
  { name: "HDFC Bank FASTag" },
  { name: "ICICI Bank FASTag" },
  { name: "Axis Bank FASTag" },
  { name: "SBI FASTag" },
  { name: "Bank of Baroda FASTag" },
  { name: "Kotak Mahindra FASTag" },
  { name: "IDFC FIRST Bank FASTag" },
  { name: "Yes Bank FASTag" },
  { name: "Federal Bank FASTag" },
  { name: "IndusInd Bank FASTag" },
  { name: "Equitas Bank FASTag" },
  { name: "Fino Payments Bank FASTag" },
  { name: "Airtel Payments Bank FASTag" },
  { name: "Punjab National Bank FASTag" },
  { name: "Canara Bank FASTag" },
  { name: "Union Bank FASTag" },
  { name: "Indian Bank FASTag" },
  { name: "Karur Vysya Bank FASTag" },
  { name: "South Indian Bank FASTag" },
  { name: "UCO Bank FASTag" },
  { name: "RBL Bank FASTag" },
  { name: "AU Small Finance Bank FASTag" },
  { name: "City Union Bank FASTag" },
  { name: "NSDL Payments Bank FASTag" },
  { name: "Amazon Pay FASTag" },
  { name: "PhonePe FASTag" },
  { name: "Google Pay FASTag" },
];

const Providers = () => {
  return (
    <section
      id="providers"
      className="py-16 text-center bg-gradient-to-b from-[#ffefba] to-[#ffffff] text-black"
    >
      <h2 className="text-3xl font-bold text-[#1f4037] mb-8">
        Choose Your FASTag Provider
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center px-4">
        {providers.map((p) => (
          <div
            key={p.name}
            className="w-40 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center p-4"
          >
            <img
              src={fastagLogo}
              alt={p.name}
              className="h-12 mb-3 object-contain rounded"
              loading="lazy"
            />
            <p className="text-sm font-semibold text-gray-800 text-center">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Providers;
