"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Users } from "lucide-react"

export function Contact() {
  const contactOptions = [
    {
      icon: Mail,
      title: "Consultas Comerciales",
      description: "Patrocinios y asociaciones",
      action: "business@nevermore.gg",
    },
    {
      icon: Users,
      title: "Únete a Nuestro Equipo",
      description: "Reclutamiento de jugadores y staff",
      action: "recruitment@nevermore.gg",
    },
    {
      icon: MessageSquare,
      title: "Contacto General",
      description: "Preguntas y soporte",
      action: "contact@nevermore.gg",
    },
  ]

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas o quieres trabajar con nosotros? Nos encantaría saber de ti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 rounded-lg bg-primary/20 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10 text-primary mt-2 bg-transparent"
                    onClick={() => (window.location.href = `mailto:${option.action}`)}
                  >
                    {option.action}
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary border-primary/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Sigue Nuestro Viaje</h3>
          <p className="text-muted-foreground mb-6">Mantente conectado con Nevermore en redes sociales</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 font-semibold bg-transparent"
            >
              Twitter
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 font-semibold bg-transparent"
            >
              Discord
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 font-semibold bg-transparent"
            >
              Twitch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 font-semibold bg-transparent"
            >
              YouTube
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
