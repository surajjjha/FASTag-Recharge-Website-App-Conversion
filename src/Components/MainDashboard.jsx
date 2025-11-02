
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarProfileModal from "./SidebarProfileModal";
import HelpAndSupport from "./HelpAndSupport";
import {
  Home,
  Clock,
  Wallet,
  Gift,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import RechargeHistory from "./RechargeHistory";
import WalletHistory from "./WalletHistory";
import Offers from "./Offers";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (selectedMenu) {
      case "Home":
        return <HomePage />;
      case "Recharge History":
        return <RechargeHistory />;
      case "Wallet History":
        return <WalletHistory />;
      case "Offers":
        return <Offers />;
      default:
        return <HomePage />;
    }
  };

  const menuItems = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Recharge History", icon: <Clock size={20} /> },
    { name: "Wallet History", icon: <Wallet size={20} /> },
    { name: "Offers", icon: <Gift size={20} /> },
    { name: "Help and Support", icon: <HelpCircle size={20} /> },
    { name: "Logout", icon: <LogOut size={20} /> },
  ];

  const handleMenuClick = (itemName) => {
    if (itemName === "Help and Support") {
      setShowHelpModal(true);
      return;
    }
    if (itemName === "Logout") {
      navigate("/");
      return;
    }
    setSelectedMenu(itemName);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-base-200 overflow-hidden relative text-black">
      
      <div className="hidden md:flex w-64 bg-[#004d40] text-white flex-col fixed h-screen">
        <div className="p-6 text-center border-b border-gray-700">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setShowProfileModal(true)}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="w-16 h-16 rounded-full mb-2 border-2 border-white hover:scale-105 transition-transform"
            />
            <h2 className="text-sm font-medium text-white">Suraj Kumar</h2>
          </div>
        </div>

        <ul className="flex-1 px-4 py-6 space-y-3 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                selectedMenu === item.name
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-[#00695c] text-white"
              }`}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#004d40] text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:hidden`}
      >
        <div className="p-5 flex justify-between items-center border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white">Menu</h2>
          <X
            size={24}
            className="cursor-pointer hover:text-gray-300"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

     
        <div
          className="flex flex-col items-center text-center py-4 border-b border-gray-700 cursor-pointer"
          onClick={() => {
            setShowProfileModal(true);
            setSidebarOpen(false);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2 border-2 border-white hover:scale-105 transition-transform"
          />
          <h2 className="text-sm font-medium text-white">Suraj Kumar</h2>
        </div>

        <ul className="px-4 py-4 space-y-3 overflow-y-auto h-[calc(100%-200px)] scrollbar-hide">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                selectedMenu === item.name
                  ? "bg-white text-black font-semibold"
                  : "hover:bg-[#00695c] text-white"
              }`}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="flex-1 flex flex-col md:ml-64 h-screen overflow-hidden text-black">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gray-50 text-black">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </div>
      </div>

      
      {showProfileModal && (
        <SidebarProfileModal onClose={() => setShowProfileModal(false)} />
      )}


      <HelpAndSupport
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
      />
    </div>
  );
};

export default DashboardLayout;
