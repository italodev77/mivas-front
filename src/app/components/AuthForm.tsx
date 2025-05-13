"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

export default function AuthForm({ type }: AuthFormProps) {
  const isSignIn = type === "sign-in";
  const router = useRouter();

  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Aqui você pode validar campos ou chamar uma API

    // Simula login bem-sucedido
    router.push("/dashboard");
  };

  return (
    <div
      className={`form-container ${type} absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-700 ${
        isSignIn ? "z-10" : "opacity-0"
      }`}
    >
      <form
        onSubmit={handleLogin}
        className="text-center text-black w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <span className="text-sm">Informe os dados abaixo</span>

        <input
          type="text"
          placeholder="CNPJ"
          className="mt-2 w-full p-2 rounded bg-gray-200"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="mt-2 w-full p-2 rounded bg-gray-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-2 w-full p-2 rounded bg-gray-200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <a href="#" className="block text-xs mt-2 text-gray-600">
          Esqueceu a senha?
        </a>

        <button
          type="submit"
          className="mt-4 bg-gray-900 hover:bg-gray-800 text-white py-2 px-8 rounded uppercase text-xs font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}
