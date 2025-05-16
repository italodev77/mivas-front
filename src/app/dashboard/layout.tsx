
import { Sidebar } from '@/components/sidebar'
import '../../app/globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Login | ERP',
  description: 'ERP multiempresa moderno',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body className="bg-gradient-to-r to-white text-white">
        <Sidebar/>
        {children}
      </body>
    </html>
  )
}