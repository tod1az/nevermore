import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function News() {
  const newsItems = [
    {
      title: "Nevermore Avanza a Semifinales",
      date: "20 Dic, 2024",
      category: "Torneo",
      excerpt:
        "Después de una victoria dominante 3-0, Nevermore asegura su lugar en las semifinales del Campeonato de Invierno.",
    },
    {
      title: "Anuncio de Nuevo Jugador",
      date: "15 Dic, 2024",
      category: "Plantilla",
      excerpt:
        "Damos la bienvenida a nuestro nuevo miembro de la familia Nevermore. Echo se une como jugador de soporte.",
    },
    {
      title: "Actualización del Bootcamp de Entrenamiento",
      date: "10 Dic, 2024",
      category: "Noticias del Equipo",
      excerpt: "El equipo se ha estado preparando intensivamente para las próximas clasificatorias internacionales.",
    },
  ]

  return (
    <section id="news" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Últimas Noticias</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantente actualizado con lo último del Team Nevermore
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>

                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 font-semibold bg-transparent"
          >
            Ver Todas las Noticias
          </Button>
        </div>
      </div>
    </section>
  )
}
