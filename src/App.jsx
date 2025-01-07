import Home from './Pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './SupperComponents/Navbar'
import Footer from './SupperComponents/Footer'
function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
