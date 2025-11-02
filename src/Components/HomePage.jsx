

import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import fastagImage from "../assets/fastag.jpeg";
import RechargeView from "./RechargeView";

const providers = [
  "Indian Highways Management",
  "IndusInd Bank",
  "Bank of Baroda",
  "Axis Bank",
  "IDFC FIRST Bank",
  "HDFC Bank",
  "Kotak Mahindra Bank",
  "Equitas",
  "IDBI Bank",
  "IOB",
  "Jammu & Kashmir Bank",
  "Karnataka Bank",
  "Paytm Payments Bank",
  "State Bank of India",
  "Federal Bank",
  "ICICI Bank",
  "Yes Bank",
  "Union Bank",
  "Punjab National Bank",
  "Central Bank",
  "Canara Bank",
  "UCO Bank",
  "Bank of India",
  "South Indian Bank",
  "AU Small Finance Bank",
];

const faqs = [
  {
    q: "What is FASTag?",
    a: "FASTag is an electronic toll collection system operated by NHAI to make toll payments directly from prepaid or savings accounts linked to it.",
  },
  {
    q: "How do I recharge my FASTag?",
    a: "You can recharge your FASTag easily using Logiclead by selecting your bank and entering your tag ID or vehicle number.",
  },
  {
    q: "Is there any minimum recharge amount?",
    a: "Yes, the minimum recharge amount depends on your issuing bank. Typically, it starts from ₹100.",
  },
  {
    q: "Can I use one FASTag for multiple vehicles?",
    a: "No, each vehicle requires a separate FASTag as it is linked with your vehicle registration number.",
  },
  {
    q: "What happens if my FASTag is blacklisted?",
    a: "If your FASTag is blacklisted due to low balance or misuse, you can recharge it again to reactivate it immediately.",
  },
];

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [showRechargeView, setShowRechargeView] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const filteredProviders = providers.filter((p) =>
    p.toLowerCase().includes(search.toLowerCase())
  );

  const openRecharge = (provider) => {
    setSelectedProvider(provider);
    setShowRechargeView(true);
  };

  const closeRecharge = () => {
    setShowRechargeView(false);
    setSelectedProvider(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffefba] to-[#ffffff] text-black p-4 sm:p-6">
    
      <div className="bg-[#00bcd4] text-black p-4 rounded-xl mb-6 flex flex-col sm:flex-row justify-between items-center shadow-md gap-3">
        <h2 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
          FASTag Recharge & Get Exciting Offers on Every Recharge!
        </h2>
        <button className="px-4 py-2 bg-white text-[#00bcd4] font-medium rounded-lg border border-[#00bcd4] hover:bg-[#e0f7fa] transition">
          ₹0.00 Add Money
        </button>
      </div>

    
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4">Select Your FASTag Provider</h3>
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search Providers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00bcd4] outline-none"
            />
          </div>
        </div>
      </div>

      


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
        {filteredProviders.map((name, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            onClick={() => openRecharge(name)}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition flex flex-col items-center py-4 cursor-pointer"
          >
            <img
              src={fastagImage}
              alt={name}
              className="w-16 h-16 mb-2 rounded"
            />
            <h4 className="font-medium text-center text-black">{name}</h4>
          </motion.div>
        ))}
      </div>





      <div className="bg-white rounded-xl p-6 shadow mb-8">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
          🏷️ NETC FASTag
        </h3>
        <p className="mb-4">
          The National Electronic Toll Collection (NETC) system is a pay-per-use
          toll collection application that anyone can use. The NETC solution uses
          FASTags with transponder chips to enable seamless toll payment.
        </p>
        <h4 className="font-semibold mb-3">Benefits of FASTag</h4>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            "Saves Time",
            "Smooth Toll Passing",
            "Saves Fuel",
            "Alerts on Mobile",
            "Saves Money",
            "Easy Online Recharge",
          ].map((benefit, idx) => (
            <span
              key={idx}
              className="px-3 py-2 bg-[#e0f7fa] text-black font-medium rounded-lg text-sm"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>






      <div className="bg-white rounded-xl p-6 shadow mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          👑 FASTag Premium
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "1. Download App",
              desc: "Download Logiclead app on your mobile and select ‘Recharge FASTag’.",
            },
            {
              title: "2. Select Bank",
              desc: "Select your FASTag issuing bank and enter your tag number.",
            },
            {
              title: "3. Recharge & Go 🚗",
              desc: "Enter the amount and proceed with your preferred payment mode.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>








      <div className="bg-white rounded-xl p-6 shadow mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">
          FAQs about FASTag
        </h3>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b pb-4">
              <h4 className="font-semibold text-lg mb-1">
                {idx + 1}. {item.q}
              </h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>





      <AnimatePresence>
        {showRechargeView && (
          <motion.div
            key="recharge-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeRecharge}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 text-black"
            >
              <RechargeView
                providerName={selectedProvider}
                onClose={closeRecharge}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
