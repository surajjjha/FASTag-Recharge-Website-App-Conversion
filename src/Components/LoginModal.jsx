
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  ); 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.id === "overlay") {
        onClose();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

 
  const handleLogin = () => {
    if (email.trim() !== "") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  };


  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl); 
    }
  };

  
  const handleUpdateProfile = () => {
    alert("Profile Updated Successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        id="overlay"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md border border-gray-200"
        >
          
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
            onClick={onClose}
          >
            ✕
          </button>

          
          {!isLoggedIn ? (
            <>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">
                Login
              </h2>

              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  className="btn bg-green-600 hover:bg-green-700 text-white w-full"
                  onClick={handleLogin}
                >
                  Login
                </button>

                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="checkbox checkbox-success" />
                  Keep me posted about sales and offers
                </label>

                <p className="text-xs text-gray-500 mt-2 text-center">
                  By proceeding, you accept our{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    T&C
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>.
                </p>

                <div className="text-center text-xs text-gray-400 mt-2">
                  🔒 Secured by Logiclead
                </div>
              </div>
            </>
          ) : (
            <>
          
              <div className="flex flex-col items-center text-center mb-5">
                <label htmlFor="profilePic" className="cursor-pointer group">
                  <img
                    src={profilePic}
                    alt="profile"
                    className="w-24 h-24 rounded-full mb-3 border-2 border-gray-300 object-cover group-hover:opacity-80 transition"
                  />
                  <span className="text-xs text-gray-500 group-hover:text-[#004d40] transition">
                    Change Picture
                  </span>
                  <input
                    type="file"
                    id="profilePic"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="hidden"
                  />
                </label>

                <h2 className="text-lg font-semibold text-gray-800 uppercase">
                  {email}
                </h2>
                <p className="text-sm text-gray-500">Premium Member</p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="input input-bordered w-full"
                />

                <button
                  className="btn bg-[#004d40] hover:bg-[#00695c] text-white w-full"
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </button>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;
