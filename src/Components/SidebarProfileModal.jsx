

import React from "react";

const SidebarProfileModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
      
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md sm:max-w-lg md:w-96 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} 
        
      >
      
      
        <button
          className="absolute top-3 right-3 text-black hover:text-gray-800 text-lg"
          onClick={onClose}
        >
          ✕
        </button>

       
       

        <div className="flex flex-col items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile Avatar"
            className="w-20 h-20 rounded-full mb-3"
          />
          <h2 className="text-base sm:text-lg font-semibold uppercase text-black break-all">
            SURAJKUMAR12244@GMAIL.COM
          </h2>
          <p className="text-sm text-black font-medium">Premium Member</p>
        </div>

    
        <div className="mt-4 space-y-3 text-black">
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full text-sm sm:text-base text-black placeholder-gray-500"
          />
          <input
            type="email"
            value="SURAJKUMAR12244@GMAIL.COM"
            readOnly
            className="input input-bordered w-full text-sm sm:text-base text-black"
          />
          <input
            type="text"
            placeholder="Enter mobile number"
            className="input input-bordered w-full text-sm sm:text-base text-black placeholder-gray-500"
          />

          <div>
            <label className="block text-sm mb-1 text-black">
              Change Profile Picture
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full text-sm sm:text-base text-black"
            />
          </div>

          <button className="btn bg-[#004d40] text-white w-full mt-3 hover:bg-[#00695c] text-sm sm:text-base font-semibold">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfileModal;
