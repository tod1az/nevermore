import { Card } from "@/components/ui/card"
import { Trophy, Medal, Star, Target } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Campeones Regionales",
      year: "2024",
      description: "Primer lugar en el Campeonato Regional de Primavera",
    },
    {
      icon: Medal,
      title: "Clasificatoria Internacional",
      year: "2024",
      description: "Clasificados para el Campeonato Mundial",
    },
    {
      icon: Star,
      title: "Ganadores de Torneos",
      year: "2023",
      description: "Ganamos 8 torneos importantes",
    },
    {
      icon: Target,
      title: "Estrellas Emergentes",
      year: "2023",
      description: "Nominación a Equipo del Año",
    },
  ]

  const stats = [
    { label: "Torneos Ganados", value: "12" },
    { label: "Tasa de Victoria", value: "73%" },
    { label: "Miembros del Equipo", value: "8" },
    { label: "Años Activos", value: "2" },
  ]

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Logros</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro camino hacia la excelencia está marcado por innumerables victorias y momentos memorables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{achievement.year}</span>
                  </div>
                  <h3 className="text-xl font-bold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
