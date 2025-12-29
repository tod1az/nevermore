import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://t6lun8rso7.ufs.sh/f/c9j148Rt2n3CRkD9RI6uM8ymlHuznPjbdUxigaLKqe9EN0sZ"
                alt="Nevermore Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">NEVERMORE</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Leyendas emergentes en el gaming competitivo, dominando torneos a nivel mundial.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Acerca de
              </Link>
              <Link href="#roster" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Plantilla
              </Link>
              <Link href="#creators" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Creadores
              </Link>
              <Link href="#achievements" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Logros
              </Link>
              <Link href="#news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Noticias
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4">Soporte</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Patrocinios
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mercancía
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kit de Prensa
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Código de Conducta
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Nevermore Esports. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
