"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import EmpresaForm from "./EmpresaForm"

interface LoginModalProps {
  open: boolean
  onClose: () => void
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 text-white border-gray-800">
        {!isLoggedIn ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-white">Login</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input placeholder="Email" className="bg-gray-800 text-white border-gray-700" />
              <Input type="password" placeholder="Senha" className="bg-gray-800 text-white border-gray-700" />
              <Button
                className="w-full bg-gray-700 hover:bg-gray-600 text-white"
                onClick={() => setIsLoggedIn(true)}
              >
                Entrar
              </Button>
            </div>
          </>
        ) : (
            <EmpresaForm onClose={onClose} />

        )}
      </DialogContent>
    </Dialog>
  )
}
