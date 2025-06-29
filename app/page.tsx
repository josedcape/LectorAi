'use client'

import { motion } from 'framer-motion'
import { BookOpen, Sparkles, Wand2, FileText } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Logo y título */}
        <motion.div
          className="mb-8"
          animate={{ float: true }}
        >
          <BookOpen className="w-20 h-20 mx-auto mb-4 text-ai-purple-500 animate-glow" />
          <h1 className="text-6xl font-bold mb-4 holographic-text">
            LectorAI
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Asistente creador de libros y cuentos literarios profesionales
          </p>
        </motion.div>

        {/* Características principales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass-effect glow-border rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-12 h-12 text-ai-gold-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">IA Avanzada</h3>
            <p className="text-gray-400">Powered by GPT-4o-mini para contenido de alta calidad</p>
          </div>
          
          <div className="glass-effect glow-border rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <Wand2 className="w-12 h-12 text-electric-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creación Capítulo a Capítulo</h3>
            <p className="text-gray-400">Desarrollo estructurado con revisión manual</p>
          </div>
          
          <div className="glass-effect glow-border rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <FileText className="w-12 h-12 text-ai-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exportación PDF</h3>
            <p className="text-gray-400">Tipografía profesional en español</p>
          </div>
        </motion.div>

        {/* Botón principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/create-book">
            <button className="futuristic-button text-lg px-8 py-4">
              <span className="relative z-10 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Crear Nuevo Libro
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
