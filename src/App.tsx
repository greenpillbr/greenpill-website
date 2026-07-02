import { Navigation } from './components/Navigation/Navigation'
import { Hero } from './sections/Hero/Hero'
import { Descoordena } from './sections/Descoordena/Descoordena'
import { ArmaDigital } from './sections/ArmaDigital/ArmaDigital'
import { Contato } from './sections/Contato/Contato'
import { OQueGreenpill } from './sections/OQueGreenpill/OQueGreenpill'
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
        <Descoordena />
        <ArmaDigital />
        <Contato />
        <OQueGreenpill />
        <Projetos />
        <FaAParte />
        <Servicos />
        <Participe />
        <Parceiros />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App
