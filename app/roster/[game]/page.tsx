import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Datos de ejemplo para cada juego
const rostersData = {
  "league-of-legends": {
    name: "League of Legends",
    players: [
      {
        name: "Shadow",
        role: "Mid",
        realName: "Alex Chen",
        specialty: "Asesinos y Magos",
        achievements: "3x MVP",
      },
      {
        name: "Phoenix",
        role: "ADC",
        realName: "Sarah Johnson",
        specialty: "Tirador",
        achievements: "Top 10 Regional",
      },
      {
        name: "Titan",
        role: "Top",
        realName: "Marcus Lee",
        specialty: "Tanques y Luchadores",
        achievements: "5x Campeón",
      },
      {
        name: "Echo",
        role: "Soporte",
        realName: "Emma Davis",
        specialty: "Control de Visión",
        achievements: "Mejor Soporte 2024",
      },
      {
        name: "Raven",
        role: "Jungla",
        realName: "Jake Martinez",
        specialty: "Control de Mapa",
        achievements: "Novato del Año",
      },
    ],
  },
  valorant: {
    name: "Valorant",
    players: [
      {
        name: "Viper",
        role: "Controlador",
        realName: "Sofia Rodriguez",
        specialty: "Control de Área",
        achievements: "Mejor Controlador 2024",
      },
      {
        name: "Blade",
        role: "Duelista",
        realName: "Ryan Park",
        specialty: "Entry Fragger",
        achievements: "MVP Regional",
      },
      {
        name: "Guardian",
        role: "Centinela",
        realName: "Tom Wilson",
        specialty: "Defensa de Sitio",
        achievements: "3x Campeón",
      },
      {
        name: "Scout",
        role: "Iniciador",
        realName: "Lisa Wang",
        specialty: "Recopilación de Info",
        achievements: "Top 5 Mundial",
      },
      {
        name: "Phantom",
        role: "Duelista",
        realName: "Chris Brown",
        specialty: "Clutch Player",
        achievements: "Mejor K/D Ratio",
      },
    ],
  },
  csgo: {
    name: "CS:GO",
    players: [
      {
        name: "Sniper",
        role: "AWPer",
        realName: "Ivan Petrov",
        specialty: "Francotirador",
        achievements: "Mejor AWP 2024",
      },
      {
        name: "Flash",
        role: "Entry Fragger",
        realName: "David Kim",
        specialty: "Primera Entrada",
        achievements: "Top Opening Kills",
      },
      {
        name: "Smoke",
        role: "IGL",
        realName: "Michael Scott",
        specialty: "Líder del Equipo",
        achievements: "Mejor IGL Regional",
      },
      {
        name: "Clutch",
        role: "Rifler",
        realName: "Andre Silva",
        specialty: "Situaciones 1vX",
        achievements: "Rey del Clutch",
      },
      {
        name: "Support",
        role: "Soporte",
        realName: "Jack Miller",
        specialty: "Utilidades",
        achievements: "MVP de Soporte",
      },
    ],
  },
  dota2: {
    name: "Dota 2",
    players: [
      {
        name: "Admiral",
        role: "Carry",
        realName: "Zhang Wei",
        specialty: "Late Game",
        achievements: "Mejor Farm 2024",
      },
      {
        name: "Storm",
        role: "Mid",
        realName: "Ana Kowalski",
        specialty: "Control de Runas",
        achievements: "MVP Internacional",
      },
      {
        name: "Tank",
        role: "Offlane",
        realName: "Boris Ivanov",
        specialty: "Iniciación",
        achievements: "Mejor Offlaner",
      },
      {
        name: "Healer",
        role: "Soporte 5",
        realName: "Maria Garcia",
        specialty: "Vision y Wards",
        achievements: "Mejor Soporte",
      },
      {
        name: "Roamer",
        role: "Soporte 4",
        realName: "John Lee",
        specialty: "Ganks",
        achievements: "Top Assists",
      },
    ],
  },
}

export default async function RosterPage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params
  const rosterData = rostersData[game as keyof typeof rostersData]

  if (!rosterData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-24 pt-32">
        <div className="container mx-auto px-4">
          <Link
            href="/#plantillas"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Plantillas
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Plantilla {rosterData.name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce a nuestros jugadores de élite en {rosterData.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rosterData.players.map((player, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 group"
              >
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/30 transition-colors">
                    <div className="text-6xl font-bold text-primary/50">{player.name[0]}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{player.name}</h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        {player.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{player.realName}</p>
                    <div className="pt-2 space-y-1">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Especialidad:</span> {player.specialty}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Logro:</span> {player.achievements}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
