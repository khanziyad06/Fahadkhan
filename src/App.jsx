import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PortfolioGrid from './components/PortfolioGrid'
import FreelanceHighlights from './components/FreelanceHighlights'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PortfolioGrid />
        <FreelanceHighlights />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
