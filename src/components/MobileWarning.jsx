import React from "react";

const MobileWarning = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg relative w-[90%] max-w-sm text-center">
        <button className="absolute top-2 right-2" onClick={onClose}>
          ✖
        </button>
        <p>This site is best viewed in desktop mode</p>
      </div>
    </div>
  );
};

export default MobileWarning;
