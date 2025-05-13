"use client"

import { useState } from "react"
import LoginModal from "./LoginModal"

interface TogglePanelProps {
  isActive: boolean
  toggle: () => void
}

export default function TogglePanel({ isActive, toggle }: TogglePanelProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="toggle absolute top-0 left-1/2 w-1/2 h-full bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-center transition-all duration-700">
        <div className="text-center px-8">
          <h1 className="text-2xl font-bold">Tecnologia de grandes empresas, agora ao seu alcance!</h1>
          <p className="mt-2 text-sm">Clique no botão para preencher os dados</p>
          <button
            className="mt-4 bg-gray-900 hover:bg-gray-800 text-white py-2 px-8 rounded uppercase text-xs font-semibold transition-colors"
            onClick={() => setModalOpen(true)}
          >
            Cadastrar
          </button>
        </div>
      </div>

      <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
