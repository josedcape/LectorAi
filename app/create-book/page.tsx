'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Sparkles, Send } from 'lucide-react'
import Link from 'next/link'

export default function CreateBook() {
  const [bookTitle, setBookTitle] = useState('')
  const [bookGenre, setBookGenre] = useState('')
  const [bookDescription, setBookDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateBook = async () => {
    if (!bookTitle || !bookGenre || !bookDescription) {
      alert('Por favor, completa todos los campos')
      return
    }

    setIsLoading(true)
    // TODO: Implementar lógica de creación de libro
    setTimeout(() => {
      setIsLoading(false)
      alert('¡Libro creado exitosamente!')
    }, 2000)
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header con navegación */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <Link href="/">
            <button className="glass-effect glow-border rounded-lg p-3 hover:scale-105 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="text-3xl font-bold holographic-text">Crear Nuevo Libro</h1>
        </motion.div>

        {/* Formulario principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect glow-border rounded-xl p-8"
        >
          <div className="space-y-6">
            {/* Título del libro */}
            <div>
              <label className="block text-sm font-medium mb-2 text-ai-purple-300">
                Título del Libro
              </label>
              <input
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
                className="w-full px-4 py-3 bg-space-black-800/50 border border-ai-purple-500/30 
                         rounded-lg focus:border-ai-purple-500 focus:ring-2 focus:ring-ai-purple-500/20 
                         transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Ej: El Misterio de la Luna Plateada"
              />
            </div>

            {/* Género */}
            <div>
              <label className="block text-sm font-medium mb-2 text-ai-purple-300">
                Género Literario
              </label>
              <select
                value={bookGenre}
                onChange={(e) => setBookGenre(e.target.value)}
                className="w-full px-4 py-3 bg-space-black-800/50 border border-ai-purple-500/30 
                         rounded-lg focus:border-ai-purple-500 focus:ring-2 focus:ring-ai-purple-500/20 
                         transition-all duration-300 text-white"
              >
                <option value="">Selecciona un género</option>
                <option value="fantasia">Fantasía</option>
                <option value="ciencia-ficcion">Ciencia Ficción</option>
                <option value="misterio">Misterio</option>
                <option value="romance">Romance</option>
                <option value="aventura">Aventura</option>
                <option value="terror">Terror</option>
                <option value="drama">Drama</option>
                <option value="infantil">Infantil</option>
              </select>
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium mb-2 text-ai-purple-300">
                Descripción e Ideas Principales
              </label>
              <textarea
                value={bookDescription}
                onChange={(e) => setBookDescription(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 bg-space-black-800/50 border border-ai-purple-500/30 
                         rounded-lg focus:border-ai-purple-500 focus:ring-2 focus:ring-ai-purple-500/20 
                         transition-all duration-300 text-white placeholder-gray-400 resize-none"
                placeholder="Describe tu historia, personajes principales, ambientación, y cualquier idea específica que quieras incluir..."
              />
            </div>

            {/* Botón de crear */}
            <motion.button
              onClick={handleCreateBook}
              disabled={isLoading}
              className="w-full futuristic-button text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Creando tu libro...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Crear Libro con IA
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
