import Navbar from '@/components/navbar/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div className="min-h-screen bg-background w-full">
      <main className='mx-auto w-full max-w-7xl px-2.5 md:px-20l'>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl text-primary">
          Landing page
        </div>
      </main>
    </div>
  )
}
