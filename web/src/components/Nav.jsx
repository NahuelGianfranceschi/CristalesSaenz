import './Nav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Saenz from './images/Saenz.png'

function Navbar() {
    return (
        <>
            <div className="NavContainer">

            <div className='Nombre-Logo'> 
                <img id='logo-nav' src={Saenz} alt="" />
                <h1 className='Titulo'>Cristales Saenz</h1>
            </div>

            <ul class="navegacion">
                        <li> <NavLink className="BotonNav" to={'/'}> Inicio </NavLink> </li>
                        <li> <NavLink className="BotonNav" to={'/Nosotros'}> Sobre Nosotros </NavLink> </li>
                        <li> <NavLink className="BotonNav" to={'/Vidrios'}> Vidrios </NavLink> </li>
                        <li> <NavLink className="BotonNav" to={'Contacto'}> Contacto </NavLink> </li>
            </ul>
            
            </div>
        </>
  );
}

export default Navbar;