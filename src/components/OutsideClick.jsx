import React from "react";
import useOutsideClick from "../hook/useCustomHook.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OutsideClickComponent = () => {
  const handleOutsideClick = () => {
    toast.info("You clicked outside the box!"); // Show toast notification
  };

  const ref = useOutsideClick(handleOutsideClick);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <ToastContainer position="top-right" autoClose={2000} />

      <div
        ref={ref}
        className="bg-white p-6 rounded-lg shadow-lg text-center w-80"
      >
        <h2 className="text-xl font-semibold">Click Outside Test</h2>
        <p className="text-gray-600">Click outside this box to trigger toast</p>
      </div>
    </div>
  );
};

export default OutsideClickComponent;
