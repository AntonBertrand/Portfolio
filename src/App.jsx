import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/Home.jsx';
import { Portfolio } from './pages/Portfolio/Portfolio.jsx'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
      </BrowserRouter>
  )
}


export default App;