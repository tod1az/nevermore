import { Card } from "@/components/ui/card"
import { Trophy, Users, Target, Zap } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Trophy,
      title: "Excelencia",
      description: "Luchamos por la victoria en cada partida y torneo",
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Unidos como uno, luchamos juntos y ganamos juntos",
    },
    {
      icon: Target,
      title: "Dedicación",
      description: "Práctica implacable y compromiso con la mejora",
    },
    {
      icon: Zap,
      title: "Innovación",
      description: "Estrategias pioneras y jugadas que rompen el meta",
    },
  ]

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Acerca de Nevermore</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fundado con pasión por el gaming competitivo, Nevermore ha ascendido rápidamente para convertirse en una
            fuerza a tener en cuenta en la escena de esports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/20 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-secondary border-border">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Nuestra Misión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dominar el panorama del gaming competitivo a través de habilidad excepcional, innovación estratégica y
              trabajo en equipo inquebrantable. Aspiramos a inspirar a la próxima generación de gamers y demostrar que
              la dedicación y la pasión pueden superar cualquier obstáculo.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
