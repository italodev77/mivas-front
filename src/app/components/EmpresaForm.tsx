"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { X } from "lucide-react"; // Ícone de fechar (instale lucide se necessário)

interface EmpresaFormProps {
  onClose: () => void;
}

export default function EmpresaForm({ onClose }: EmpresaFormProps) {
  const [form, setForm] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    ie: "",
    rua: "",
    numero: "",
    bairro: "",
    municipio: "",
    codMunicipio: "",
    cep: "",
    uf: "",
    telefone: "",
    regimeTributario: "",
    pathdb: "",
    jdbcUrl: "",
    dbUser: "",
    dbPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Empresa cadastrada:", form);
    // Aqui você pode chamar uma API
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg p-6">
        
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Cadastro de Empresa
          </h2>

          {[
            { name: "razaoSocial", label: "Razão Social" },
            { name: "nomeFantasia", label: "Nome Fantasia" },
            { name: "cnpj", label: "CNPJ" },
            { name: "ie", label: "Inscrição Estadual" },
            { name: "rua", label: "Rua" },
            { name: "numero", label: "Número" },
            { name: "bairro", label: "Bairro" },
            { name: "municipio", label: "Município" },
            { name: "codMunicipio", label: "Código do Município" },
            { name: "cep", label: "CEP" },
            { name: "uf", label: "UF" },
            { name: "telefone", label: "Telefone" },
            { name: "regimeTributario", label: "Regime Tributário" },
            { name: "pathdb", label: "Path do Banco (Tenant)" },
            { name: "jdbcUrl", label: "JDBC URL" },
            { name: "dbUser", label: "Usuário do Banco" },
            { name: "dbPassword", label: "Senha do Banco", type: "password" }
          ].map(({ name, label, type = "text" }) => (
            <div key={name} className="flex flex-col gap-1">
              <Label htmlFor={name} className="text-sm text-gray-700">
                {label}
              </Label>
              <Input
                id={name}
                name={name}
                type={type}
                placeholder={`ex: ${label}`}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                className="bg-gray-100 text-gray-800 placeholder:text-gray-500 border border-gray-300 rounded-md px-3 py-2 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md"
          >
            Cadastrar Empresa
          </Button>
        </form>
      </div>
    </div>
  );
}
