import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Youtube, Twitch, Twitter } from "lucide-react"

export function ContentCreators() {
  const creators = [
    {
      name: "NightHawk",
      realName: "Carlos Vega",
      platform: "Twitch",
      followers: "120K",
      specialty: "Gameplay en Vivo",
      description: "Transmisiones diarias y análisis de estrategias",
    },
    {
      name: "VoidQueen",
      realName: "Luna Rivera",
      platform: "YouTube",
      followers: "250K",
      specialty: "Tutoriales y Guías",
      description: "Contenido educativo para mejorar tu juego",
    },
    {
      name: "StormBreaker",
      realName: "Diego Morales",
      platform: "TikTok",
      followers: "180K",
      specialty: "Highlights y Clips",
      description: "Las mejores jugadas en formato corto",
    },
  ]

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "Twitch":
        return Twitch
      case "YouTube":
        return Youtube
      default:
        return Twitter
    }
  }

  return (
    <section id="creators" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Creadores de Contenido</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros creadores comparten su pasión y conocimiento con la comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {creators.map((creator, index) => {
            const PlatformIcon = getPlatformIcon(creator.platform)
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 group"
              >
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/30 transition-colors">
                    <div className="text-6xl font-bold text-primary/50">{creator.name[0]}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{creator.name}</h3>
                      <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        <PlatformIcon className="w-3 h-3 mr-1" />
                        {creator.platform}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{creator.realName}</p>
                    <div className="pt-2 space-y-1">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Especialidad:</span> {creator.specialty}
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Seguidores:</span> {creator.followers}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">{creator.description}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/50 hover:bg-primary/10 text-primary bg-transparent mt-4"
                  >
                    Seguir
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
