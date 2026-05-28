function SidebarLeft() {
  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4">
      
      <h1 className="text-2xl font-bold mb-6">
        Allan Tijou
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">

        <button className="text-left p-2 rounded hover:bg-zinc-800">
          Mon profil
        </button>

        <button className="text-left p-2 rounded hover:bg-zinc-800">
          Mes projets
        </button>

      </nav>

      {/* Photo */}
      <div className="mt-10">
        <img
          src="https://placehold.co/200x200"
          alt="profil"
          className="rounded-xl"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">

        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
          Java
        </span>

        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
          Laravel
        </span>

      </div>

      {/* Description */}
      <p className="text-zinc-400 mt-6 text-sm">
        Développeur backend et frontend passionné par les applications métier,
        l’automatisation et les interfaces modernes.
      </p>

    </div>
  )
}

function MainContent() {
  return (
    <div className="flex-1 p-8">

      <h2 className="text-4xl font-bold mb-6">
        Mon Profil
      </h2>

      <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
        Contenu principal ici
      </div>

    </div>
  )
}

function Sandbox() {
  return (
    <div className="w-80 bg-zinc-900 border-l border-zinc-800 p-4">

      <h2 className="text-xl font-bold mb-4">
        Sandbox
      </h2>

      {/* Bloc exemple */}
      <div className="bg-zinc-800 rounded-xl p-4 h-40 mb-4">
        Petit bloc
      </div>

      <div className="bg-zinc-800 rounded-xl p-4 h-64">
        Grand bloc
      </div>

    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      <SidebarLeft />

      <MainContent />

      <Sandbox />

    </div>
  )
}