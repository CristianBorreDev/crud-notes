import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function NoteModal({ isOpen, onClose, onSave, defaultText = '', mode = 'create' }) {
  const [text, setText] = useState(defaultText)

  useEffect(() => {
    setText(defaultText)
  }, [defaultText])

  const handleSave = () => {
    if (!text.trim()) return
    onSave(text)
    setText('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30 px-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-5 shadow-2xl text-[var(--color-text)]"
          >
            <h2 className="text-lg font-semibold mb-3 text-center">
              {mode === 'edit' ? 'Editar nota' : 'Nueva nota'}
            </h2>

            <textarea
              className="w-full h-32 sm:h-40 p-3 rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] focus:border-[var(--color-accent)] outline-none resize-none"
              placeholder="Escribe una idea..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setText('')
                  onClose()
                }}
                className="px-4 py-2 rounded-md bg-[var(--color-border)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-[var(--color-success)] text-white hover:opacity-90 transition"
              >
                Guardar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NoteModal
