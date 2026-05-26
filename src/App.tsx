import Home from './pages/Home'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="bg-[#A8D8EA] py-5 px-4 text-center shadow-sm">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          BabyBond &amp; Giggles
        </h1>
        <p className="mt-1 text-sm font-semibold text-white/80">
          Simple playtime ideas for your little one
        </p>
      </header>

      <Home />
    </div>
  )
}
