// HelpAndSupport.jsx
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HelpAndSupport = ({ isOpen, onClose }) => {

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.id === "overlay") onClose();
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-sm border border-gray-200"
          >
           
           
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>

        
        
            <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Help and Support
            </h2>

           
           
           
            <div className="space-y-3 text-gray-700 text-center">
              <p>
                <strong>Email:</strong> ops@logiclead.in
              </p>
              <p>
                <strong>Email:</strong> tech@logiclead.in
              </p>
              <p>
                <strong>Mobile:</strong> XXXXXXXXXX
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HelpAndSupport;
