import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>}/>
       <Route path ="/service" element={<Service/>}/>
       <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </>
  )
}

export default App
