import NotesBoard from "./components/NotesBoard"

function App() {

  return (
    <>
      <main className="min-h-screen px-4 sm:px-8 py-6 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      
      {/* 🧭 Header: Filosofía del sistema */}
      <header className="text-center mb-4 sm:mb-6 pt-4">
        <h1 className="text-lg sm:text-2xl font-semibold text-gray-100 mb-2 leading-snug">
          Cada idea comienza como una nota breve.
        </h1>
        <p className="text-xs sm:text-base text-[var(--color-text-muted)]">
          Sistema funcional · Notas persistentes y expresión visual
        </p>
      </header>

      {/* 📒 Board de notas */}
      <section className="flex justify-center">
        <NotesBoard />
      </section>
    </main>
    </>
  )
}

export default App
