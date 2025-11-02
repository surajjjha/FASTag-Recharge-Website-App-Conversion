

import React from "react";
import { Search } from "lucide-react";
import fastagImage from "../assets/fastag.jpeg";

const RechargeHistory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffefba] to-[#ffffff] p-4 sm:p-6 text-black">
    
    

      <div className="bg-cyan-500 text-white p-4 sm:p-5 rounded-2xl mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-lg">
        <h2 className="text-base sm:text-lg font-semibold flex items-center gap-2 leading-tight text-black">
          🏷️ FASTag Recharge & Get Exciting Offers on Every Recharge!
        </h2>
        <button className="bg-white text-cyan-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition shadow">
          ₹0.00 Add Money
        </button>
      </div>

 
 


      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2 text-black">
            <span className="text-2xl">🔁</span> Recharge History
          </h3>
          <img
            src={fastagImage}
            alt="Bharat Connect"
            className="w-24 sm:w-28 h-auto rounded-lg"
          />
        </div>




        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-end gap-4 mb-6">
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-sm font-medium mb-1 text-black">
              From Date
            </label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-white"
            />
          </div>
          <div className="flex flex-col w-full sm:w-auto">
            <label className="text-sm font-medium mb-1 text-black">To Date</label>
            <input
              type="date"
              className="border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black bg-white"
            />
          </div>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg flex items-center gap-2 shadow transition w-full sm:w-auto justify-center">
            <Search size={18} /> Search
          </button>
        </div>

     

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm sm:text-base text-left border-collapse">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="px-4 py-3 border-b">Sr.No</th>
                <th className="px-4 py-3 border-b">TxnID</th>
                <th className="px-4 py-3 border-b">Customer Name</th>
                <th className="px-4 py-3 border-b">Amount</th>
                <th className="px-4 py-3 border-b">Discount</th>
                <th className="px-4 py-3 border-b">Vehicle No</th>
                <th className="px-4 py-3 border-b">Created At</th>
                <th className="px-4 py-3 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No records found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RechargeHistory;
