import React from "react"
import "./Footer.css"
import Saenz from "./images/Saenz.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Footerf = () => <footer className="footerdiv">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div id="footer-nombre-logo" className="col-md-6 mt-md-0 mt-3">
                <img id="logo-footer" src={Saenz} alt="" />
                <h5 id="Titulo-Footer" className="text-uppercase">Cristales Saenz</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                
                <ul className="list-unstyled">
                    <li><a href="https://wa.me/1134523008">< FontAwesomeIcon id="wpp" className="Iconos" icon={brands('whatsapp')}/></a></li>
                    <li><a href="https://www.instagram.com/cristalessaenz/?hl=es.com">< FontAwesomeIcon id="insta" className="Iconos" icon={brands('instagram')}/></a></li>
                    <li><a href="mailto:@CristalesSaenz.com">< FontAwesomeIcon id="gmail" className="Iconos" icon={regular('envelope')}/></a></li>
                </ul>
            </div>

            
        </div>
    </div>

    <div id="footer-copy" className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/"> CristalesSaenz.com</a>
    </div>

</footer>

export default Footerf