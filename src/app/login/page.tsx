"use client"
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import TogglePanel from "../components/TogglePanel";

export default function LoginPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-all duration-700 bg-gradient-to-r from-gray-800 to-gray-900 text-white ${
        isActive ? "[&>.sign-in]:translate-x-full [&>.sign-in]:opacity-0" : ""
      }`}
    >
      <div className="relative w-full max-w-4xl min-h-[480px] bg-white rounded-3xl shadow-lg overflow-hidden">
        <AuthForm type="sign-up" />
        <AuthForm type="sign-in" />
        <TogglePanel isActive={isActive} toggle={() => setIsActive(!isActive)} />
      </div>
    </div>
  );
}
