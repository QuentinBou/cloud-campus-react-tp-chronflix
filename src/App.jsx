import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Chroniques from './pages/Chroniques'
import Apropos from './pages/Apropos'
import Profil from './pages/Profils'
import Home from './pages/Home'
import AddChronique from './pages/AddChronique'
import Navbar from './components/home/navbar'
import ChroniqueResume from './pages/ChroniqueResume'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
                <Route path="/"  element={ <Home />} />
                <Route path="/chroniques"  element={ <Chroniques />} />
                <Route path='/chroniques/:id' element={<ChroniqueResume />} />
                <Route path="/apropos"  element={ <Apropos />} />
                <Route path="/profil"  element={ <Profil />} />
                <Route path="/add"  element={ <AddChronique />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

          </div>
        
        </BrowserRouter>
    </div>
  )
}

export default App
