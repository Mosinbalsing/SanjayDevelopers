import Home from './Pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './SupperComponents/Navbar'
import Footer from './SupperComponents/Footer'
import About from './Pages/About'
import ProjectsShowcase from './Pages/ProjectsShowcase'
import './App.css';
import BlogSection from './Pages/Blog'
import ContactPage from './Pages/contact-page'
import Log from './SupperComponents/Logo'
import SocialLinks from './SupperComponents/social-links'
import ScrollToTop from './SupperComponents/scroll-to-top'
function App() {
 

  return (<>
    <BrowserRouter >
    <Navbar />
    <Log/>
    <ScrollToTop />
      <SocialLinks/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  )
}

export default App
