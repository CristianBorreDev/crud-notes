import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNotesStore } from '../store/useNotesStore'
import NoteCard from './NoteCard'
import NoteModal from './NoteModal'

const colors = [
  'var(--color-card-1)',
  'var(--color-card-2)',
  'var(--color-card-3)',
]

function NotesBoard() {
  const { notes, addNote, updateNote } = useNotesStore()
  const [showModal, setShowModal] = useState(false)
  const [editingNote, setEditingNote] = useState(null)

  const handleAddNote = (text) => {
    const color = colors[Math.floor(Math.random() * colors.length)]
    addNote(text, color)
    setShowModal(false)
  }

  const handleEditNote = (text) => {
    if (editingNote) {
      updateNote(editingNote.id, text)
      setEditingNote(null)
      setShowModal(false)
    }
  }

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
      {/* ✨ Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setEditingNote(null)
          setShowModal(true)
        }}
        className="fixed bottom-6 right-6 bg-[var(--color-accent)] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[var(--color-accent-soft)] transition z-20"
      >
        + Nueva nota
      </motion.button>

      {/* 📒 Grid de notas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 w-full mt-6 sm:mt-10 px-3">
        <AnimatePresence>
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onClick={() => {
                setEditingNote(note)
                setShowModal(true)
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* 🌙 Modal */}
      <NoteModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
          setEditingNote(null)
        }}
        onSave={editingNote ? handleEditNote : handleAddNote}
        defaultText={editingNote?.text || ''}
        mode={editingNote ? 'edit' : 'create'}
      />
    </section>
  )
}

export default NotesBoard
