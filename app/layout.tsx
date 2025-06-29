import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LectorAI - Asistente Creador de Libros',
  description: 'Asistente creador de libros cuentos literarios profesionales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-space-black-900 text-white min-h-screen`}>
        <div className="min-h-screen bg-gradient-to-br from-space-black-900 via-space-black-800 to-ai-purple-600/10">
          {children}
        </div>
      </body>
    </html>
  )
}
