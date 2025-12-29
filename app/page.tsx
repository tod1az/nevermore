import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Games } from "@/components/games"
import { ContentCreators } from "@/components/content-creators"
import { Achievements } from "@/components/achievements"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Games />
      <ContentCreators />
      <Achievements />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
