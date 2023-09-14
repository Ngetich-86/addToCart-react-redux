import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      

    </div>


  )
}

export default App