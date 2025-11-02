

import React, { useState } from "react";
import { Pencil } from "lucide-react";

const RechargeView = ({ providerName = "Indian Highways Management", onClose }) => {
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleNext = () => {
    if (!vehicleNumber.trim()) {
      alert("Please enter a vehicle registration number");
      return;
    }
    alert(`Recharging ${providerName} FASTag for vehicle: ${vehicleNumber}`);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md border border-gray-200 text-black">
     
     

      <button
        className="absolute top-3 right-3 text-black hover:text-gray-800 text-lg"
        onClick={onClose}
      >
        ✕
      </button>

 
 
      <div className="bg-cyan-500 text-white p-4 rounded-lg mb-6 flex justify-between items-center shadow">
        <h2 className="text-lg font-semibold">
          FASTag Recharge & Get Exciting Offers!
        </h2>
        <button className="btn btn-sm bg-white text-cyan-700 hover:bg-gray-100">
          ₹0.00 Add Money
        </button>
      </div>

    
    

      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-6 text-center text-black">
          Recharge your FASTag
        </h3>




        <div className="flex justify-between items-center w-full border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3202/3202926.png"
              alt="Provider"
              className="w-10 h-10"
            />
            <span className="font-medium text-black">{providerName}</span>
          </div>
          <button className="text-red-600 font-semibold flex items-center gap-1">
            <Pencil size={16} /> EDIT
          </button>
        </div>

     
     

        <input
          type="text"
          placeholder="Vehicle Registration Number"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          className="input input-bordered w-full mb-4 text-black placeholder-gray-400"
        />

        <button
          onClick={handleNext}
          className="btn bg-cyan-700 text-white w-full hover:bg-cyan-800"
        >
          NEXT
        </button>

        <div className="mt-8">
          <img
            src="https://cdn.dribbble.com/users/199982/screenshots/16752105/media/76818db7b67c48c8daae9f7a1b20539e.gif"
            alt="Toll Animation"
            className="w-64"
          />
        </div>
      </div>
    </div>
  );
};

export default RechargeView;
