import { Navigation } from './components/Navigation/Navigation'
import { Hero } from './sections/Hero/Hero'
import { Colapso } from './sections/Colapso/Colapso'
import { ArmaDigital } from './sections/ArmaDigital/ArmaDigital'
import { Contato } from './sections/Contato/Contato'
import { Projetos } from './sections/Projetos/Projetos'
import { FaAParte } from './sections/FaAParte/FaAParte'
import { Servicos } from './sections/Servicos/Servicos'
import { Participe } from './sections/Participe/Participe'
import { Parceiros } from './sections/Parceiros/Parceiros'
import { Faq } from './sections/Faq/Faq'
import { Footer } from './sections/Footer/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Colapso />
        <ArmaDigital />
        <Contato />
        {/* <OQueGreenpill /> */}
        <Projetos />
        <FaAParte />
        <Servicos />
        <Participe />
        <Parceiros />
        <Faq />
      <Footer />
      </main>
    </>
  )
}

export default App
