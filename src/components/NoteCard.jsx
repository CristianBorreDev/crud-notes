import { motion } from 'framer-motion'
import { useNotesStore } from '../store/useNotesStore'

function NoteCard({ note, onClick }) {
  const deleteNote = useNotesStore((state) => state.deleteNote)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={onClick}
      className="relative p-3 sm:p-4 rounded-xl min-h-[110px] sm:min-h-[140px] cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98] transition-transform"
      style={{
        background: note.color,
      }}
    >
      <p className="text-[var(--color-text)] text-sm sm:text-base leading-snug line-clamp-5 whitespace-pre-wrap break-words">
        {note.text}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation()
          deleteNote(note.id)
        }}
        className="absolute top-2 right-2 text-xs text-red-400 hover:text-red-300 transition"
      >
        ✕
      </button>
    </motion.div>
  )
}

export default NoteCard
