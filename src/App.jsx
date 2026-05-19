import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Diaspora from './components/Diaspora'
import Notices from './components/Notices'
import Appointments from './components/Appointments'
import AboutZimbabwe from './components/AboutZimbabwe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AboutZimbabwe />
      <Services />
      <Diaspora />
      <Notices />
      <Appointments />
      <Contact />
      <Footer />
    </div>
  )
}
