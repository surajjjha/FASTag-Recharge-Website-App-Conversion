
import React, { useState } from "react";
import { Menu } from "lucide-react";
import LoginModal from "./LoginModal";

const Navbar = ({ onMenuClick }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => setShowLoginModal(true);
  const handleCloseModal = () => setShowLoginModal(false);

  return (
    <>
      <div className="navbar bg-gradient-to-r from-[#1f4037] to-[#99f2c8] text-black px-4 sm:px-6 shadow-md">
        <div className="flex-1 flex items-center gap-3">
          
          <button
            onClick={onMenuClick}
            className="md:hidden p-1 hover:bg-black/10 rounded-lg transition text-black"
          >
            <Menu size={24} />
          </button>

          <span className="text-xl sm:text-2xl font-bold tracking-wide text-black">
            Logiclead
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button className="btn btn-outline btn-sm text-black border-black hover:bg-black hover:text-white transition">
            Wallet ₹0.00
          </button>

          <div
            className="avatar cursor-pointer"
            onClick={handleLoginClick}
          >
            <div className="w-9 sm:w-10 rounded-full ring ring-black ring-offset-base-100 ring-offset-2 hover:scale-105 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      {showLoginModal && <LoginModal onClose={handleCloseModal} />}
    </>
  );
};

export default Navbar;
