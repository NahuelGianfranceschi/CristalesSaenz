import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import Saenz from "./images/Saenz.png"
import "./Footer.css"

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
      
        <section className=''>

        <div id="footer-nombre-logo" className="col-md-6 mt-md-0 mt-3">
                <img id="logo-footer" src={Saenz} alt="" />
                <h5 id="Titulo-Footer" className="text-footer">Cristales Saenz</h5>
            </div>

          <MDBRow className='divfooter'>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>
                    Horario: 08:00 - 13:00 / 14:00 - 17:00
                  </p>
                </li>
              </ul>
            </MDBCol>

            

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p>
                    Dirección: Alvear 3633 Lomas del Mirador
                  </p>
                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>

          <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <a href="https://wa.me/1134523008"><MDBIcon fab icon='whatsapp' /></a>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <a href="mailto:@CristalesSaenz.com"><MDBIcon fab icon='google' /></a>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <a href="https://www.instagram.com/cristalessaenz/?hl=es.com"><MDBIcon fab icon='instagram' /></a>
          </MDBBtn>

          </section>

        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://CristalesSaenz.com/'>
          CristalesSaenz.com
        </a>
      </div>
    </MDBFooter>
  );
}