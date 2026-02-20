import { createFileRoute, Link, useNavigate, useRouter } from '@tanstack/react-router'
import LiquidCard from '@/components/LiquidCard'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className='flex justify-center'>
        <LiquidCard className='m-8 p-8 min-w-4xl'>
          <header className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h1 className="text-4xl font-extralight tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-cyan-100 to-indigo-200">
                <span className="font-semibold text-cyan-400">ARCHITECT</span>
              </h1>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              {
                [
                  {
                    href: "/",
                    text: "Personagens",
                    hash: "characters"
                  }
                ]
                  .map((link, i) => (
                    <Link
                      key={i}
                      to={link.href}
                      hash={link.hash}
                      className='relative text-cyan-100 text-lg tracking-tighter after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cyan-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                    >
                      {link.text}
                    </Link>
                  ))
              }
            </nav>

            <button
              onClick={() => navigate({ to: '/new-char' })}
              className="group relative px-6 py-3 overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 w-0 bg-linear-to-r from-cyan-500/20 to-indigo-500/20 transition-all duration-250 ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
              <div className="relative flex items-center gap-2">
                <Plus size={20} className="text-cyan-300" />
                <span className="font-medium text-sm tracking-wide text-cyan-300">
                  Novo Personagem
                </span>
              </div>
            </button>
          </header>
        </LiquidCard>
      </div>
    </div>
  )
}
