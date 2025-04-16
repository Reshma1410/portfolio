import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingNav from "./components/floating-nav"
import Footer from "./components/Footer"
import ResumeSection from "./components/ResumeSection"

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  )
}
