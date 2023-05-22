import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Navbar from './components/Nav';
//import Footerf from './components/Footer';
//import Vidrios from './components/Productos';
//import Contact from './components/Contacto';
import Trabajos from './components/Carrusel';

function App() {
  return (
    <div>
      <BrowserRouter>
       

<Navbar/>
        <div className="content-container">
          
          <Routes>
            <Route path='/' element={<Trabajos />}></Route>
            {/* 
            <Route path='/Vidrios' element={<Vidrios />}></Route>
            <Route path='/Contacto' element={<Contact />}></Route>*/}
            </Routes>

        </div>
      {/*<Footerf/>*/}  
      </BrowserRouter>
    </div>
  );
}

export default App;
