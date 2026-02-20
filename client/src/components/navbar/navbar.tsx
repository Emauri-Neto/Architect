import { Link } from "@tanstack/react-router"
import { ThemeToggler } from "@/components/theme/toggler"

type Props = {}

const NAV_LINKS = [
    { href: "/characters", text: "Personagens" }
]

export default function Navbar({ }: Props) {
    return (
        <div className="sticky z-50 h-14 inset-x-0 top-0 w-full ">
            <header className="relative">
                <main className='mx-auto w-full max-w-7xl px-2.5 md:px-20l'>
                    <div className="border-b border-border bg-background">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link to="/" className="flex items-center gap-2">
                                    <h2 className="text-2xl font-semibold text-primary tracking-tighter underline">ARCHITECT</h2>
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-center">
                                {NAV_LINKS.map((link, i) => (
                                    <Link key={i} to={link.href} className='relative text-muted-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-muted-foreground 
      after:bg-muted-foreground after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'>
                                        {link.text}
                                    </Link>
                                ))}
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <ThemeToggler />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
            </header>
        </div>
    )
}