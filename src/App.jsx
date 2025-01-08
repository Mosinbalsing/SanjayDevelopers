import Home from './Pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './SupperComponents/Navbar'
import Footer from './SupperComponents/Footer'
import About from './Pages/About'
function App() {
 

  return (<>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
