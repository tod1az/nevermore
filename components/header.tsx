"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="https://t6lun8rso7.ufs.sh/f/c9j148Rt2n3CRkD9RI6uM8ymlHuznPjbdUxigaLKqe9EN0sZ" alt="Nevermore Logo" width={50} height={50} className="w-12 h-12" />
            <span className="text-2xl font-bold tracking-tight">NEVERMORE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Acerca de
            </Link>
            <Link href="#plantillas" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Plantillas
            </Link>
            <Link href="#creators" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Creadores
            </Link>
            <Link href="#achievements" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Logros
            </Link>
            <Link href="#news" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Noticias
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Únete
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Acerca de
            </Link>
            <Link href="#plantillas" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Plantillas
            </Link>
            <Link href="#creators" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Creadores
            </Link>
            <Link href="#achievements" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Logros
            </Link>
            <Link href="#news" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Noticias
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
              Únete
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
