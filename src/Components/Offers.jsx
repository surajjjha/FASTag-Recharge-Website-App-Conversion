
import React from "react";
import bharatLogo from "../assets/bharat.png";

const Offers = () => {
  const offers = [
    {
      code: "WELLCOME50%",
      description: "Get instant 50% off",
      validTill: "Valid Till 25 Oct 2025",
    },
    {
      code: "WELLCOME20%",
      description: "Get instant 20% off",
      validTill: "Valid Till 30 Nov 2025",
    },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-[#ffefba] to-[#ffffff] text-black">
     
      <div className="bg-cyan-500 text-white p-4 rounded-lg mb-6 flex justify-between items-center shadow-md">
        <h2 className="text-lg font-semibold">
          FASTag Recharge & Get Exciting Offers on Every Recharge!
        </h2>
        <button className="px-4 py-2 bg-white text-cyan-700 font-semibold rounded-lg shadow-sm hover:bg-gray-100 transition">
          ₹0.00 Add Money
        </button>
      </div>

      
      <div className="bg-white rounded-xl p-6 shadow-md mb-8">
      
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2 text-black">
            🎁 Exclusive Offers
          </h3>
          <img
            src={bharatLogo}
            alt="Bharat Connect"
            className="w-24 h-auto"
          />
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-300 rounded-xl shadow-sm hover:shadow-lg transition bg-white flex flex-col items-center text-center"
            >
              <div className="text-cyan-600 text-4xl mb-3">🎁</div>
              <h4 className="text-lg font-semibold mb-1">{offer.code}</h4>
              <p className="mb-3">{offer.description}</p>
              <span className="px-3 py-1 bg-green-700 text-white text-sm font-medium rounded-md">
                {offer.validTill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
