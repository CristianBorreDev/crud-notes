import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { seedNotes } from '../data/seedNotes'

export const useNotesStore = create(
  persist(
    (set) => ({
      notes: seedNotes,

      addNote: (text, color) =>
        set((state) => ({
          notes: [
            ...state.notes,
            { id: Date.now(), text, color },
          ],
        })),

      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
        })),

      updateNote: (id, newText) =>
        set((state) => ({
          notes: state.notes.map((n) =>
            n.id === id ? { ...n, text: newText } : n
          ),
        })),
    }),
    {
      name: 'notes-storage',
    }
  )
)
