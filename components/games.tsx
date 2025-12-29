import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function Games() {
  const games = [
    {
      name: "League of Legends",
      slug: "league-of-legends",
      description: "Nuestro equipo principal compitiendo en las ligas más importantes de LoL",
      playerCount: 5,
      bgGradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      name: "Valorant",
      slug: "valorant",
      description: "Escuadrón táctico dominando la escena competitiva de Valorant",
      playerCount: 5,
      bgGradient: "from-red-500/20 to-pink-500/20",
    },
    {
      name: "CS:GO",
      slug: "csgo",
      description: "Veteranos expertos en estrategia y puntería en Counter-Strike",
      playerCount: 5,
      bgGradient: "from-orange-500/20 to-yellow-500/20",
    },
    {
      name: "Dota 2",
      slug: "dota2",
      description: "Maestros del MOBA compitiendo en torneos internacionales",
      playerCount: 5,
      bgGradient: "from-green-500/20 to-emerald-500/20",
    },
  ]

  return (
    <section id="plantillas" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Plantillas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compitiendo en múltiples juegos con los mejores jugadores de cada título
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {games.map((game) => (
            <Link key={game.slug} href={`/roster/${game.slug}`}>
              <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 group cursor-pointer h-full">
                <div className="space-y-4">
                  <div
                    className={`aspect-video bg-gradient-to-br ${game.bgGradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white/80">{game.name[0]}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{game.name}</h3>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-muted-foreground">{game.description}</p>
                    <p className="text-xs text-muted-foreground pt-2">{game.playerCount} jugadores en la plantilla</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
