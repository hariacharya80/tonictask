import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
  children: React.ReactNode;
}

function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer position="top-center" />
    </>
  );
}

export default ToastProvider;
