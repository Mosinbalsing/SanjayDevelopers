import Home from './Pages/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './SupperComponents/Navbar'
function App() {
 

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
