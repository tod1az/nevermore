import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/50 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <Image
            src="https://t6lun8rso7.ufs.sh/f/c9j148Rt2n3CRkD9RI6uM8ymlHuznPjbdUxigaLKqe9EN0sZ"
            alt="Nevermore Logo"
            width={300}
            height={300}
            className="w-64 h-64 md:w-80 md:h-80 animate-fade-in"
            priority
          />

          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">NEVERMORE</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              Leyendas Emergentes en el Gaming Competitivo
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-8"
            >
              Ver Plantilla
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-lg h-12 px-8 border-primary/50 hover:bg-primary/10 bg-transparent"
            >
              Nuestros Logros
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  )
}
