import React from "react"
import "./Productos.css"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import Monolitico from "./images/Monolitico.jpeg";
import MonoliticoBr from "./images/MonoliticoBr.jpeg";
import MonoliticoGr from "./images/MonoliticoGr.jpeg";
import Laminado from "./images/Laminado.jpeg";
import DVH from "./images/DVH.jpeg";
import EspejoRedondo from "./images/EspejoRedondo.jpeg";
import EspejoGr from "./images/EspejoGr.jpeg";
import Espejo from "./images/Espejo.jpeg";
import Stipolit from "./images/Stipolit.jpeg";
import Pacific from "./images/Pacific.jpeg";
import Austral from "./images/Austral.jpeg";
import Acanalado from "./images/Acanalado.jpeg";
import Martele from "./images/Martele.jpeg";
import Armado from "./images/Armado.jpeg";
import StopSol from "./images/StopSol.jpeg";
import Opacid from "./images/Opacid.jpeg";
import Sycamore from "./images/Sycamore.jpeg";
import Esmerilado from "./images/Esmerilado.jpeg";



function Vidrios() {
  
  return (
    <Tab.Container className="Tabs" id="tabs" defaultActiveKey="Monoliticos">
      <Row>
        <Col className="Columna-Tabs" sm={2}>
          <Nav variant="pills" className="flex-column">

            <Nav.Item className="tab-item">
              <Nav.Link eventKey="Monoliticos">Monoliticos</Nav.Link>
            </Nav.Item>

            <Nav.Item className="tab-item">
              <Nav.Link eventKey="Laminados">Laminados</Nav.Link>
            </Nav.Item>

            <Nav.Item className="tab-item">
              <Nav.Link eventKey="DVH">DVH</Nav.Link>
            </Nav.Item>

            <Nav.Item className="tab-item">
              <Nav.Link eventKey="Espejos">Espejos</Nav.Link>
            </Nav.Item>

            <Nav.Item className="tab-item">
              <Nav.Link eventKey="Fantasia">Fantasia</Nav.Link>
            </Nav.Item>


          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>

            <Tab.Pane eventKey="Monoliticos">
                 
              <div className="Presentacion-Tabs">
                <h2 className="Titulo-Tab">Vidrios Monolíticos</h2>
                <h3 className="VidriosInfo">El vidrio monolítico es un tipo de vidrio plano que se produce a partir de una sola pieza de vidrio sin capas ni capas adicionales. Es el tipo más común de vidrio utilizado en ventanas y puertas, así como en muchas otras aplicaciones de construcción y diseño.</h3>
                <h3 className="VidriosInfo">Aunque el vidrio monolítico es resistente y duradero, también es susceptible a romperse en grandes piezas afiladas en caso de rotura. Por lo tanto, se recomienda su uso en combinación con otras técnicas de seguridad, como la laminación, para mejorar su resistencia y seguridad en aplicaciones de alta exigencia.</h3>
              </div>

              <div className="Tarjetas">
                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Monolitico} />
                  <Card.Body>
                    <Card.Title>2MM - 10MM Incoloro</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={MonoliticoBr} />
                  <Card.Body>
                    <Card.Title>3MM - 10MM Bronce</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={MonoliticoGr} />
                  <Card.Body>
                    <Card.Title>3MM - 10MM Gris</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>
              </div>  
              
            </Tab.Pane>

            <Tab.Pane eventKey="Laminados">
            <div className="Presentacion-Tabs">
                <h2 className="Titulo-Tab">Laminados </h2>
                <h3 className="VidriosInfo">El vidrio laminado es un tipo de vidrio de seguridad compuesto por dos o más hojas de vidrio unidas mediante una capa intermedia de material plástico resistente, como el polivinil butiral (PVB). Esta capa intermedia proporciona una mayor resistencia al vidrio, lo que hace que sea menos propenso a romperse y fragmentarse en caso de impacto.</h3>
                <h3 className="VidriosInfo">Además, en caso de rotura, los fragmentos de vidrio permanecen adheridos a la capa intermedia, lo que reduce el riesgo de lesiones por cortes. El vidrio laminado se utiliza comúnmente en aplicaciones como ventanas, puertas, techos y parabrisas de automóviles.</h3>
              </div>

            <div className="Tarjetas">
                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Laminado} />
                  <Card.Body>
                    <Card.Title>3+3</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Laminado} />
                  <Card.Body>
                    <Card.Title>4+4</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Laminado} />
                  <Card.Body>
                    <Card.Title>5+5</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

            </div>           
            </Tab.Pane>

            <Tab.Pane eventKey="DVH">

            <div className="Presentacion-Tabs">
                <h2 className="Titulo-Tab">DVH </h2>
                <h3 className="VidriosInfo">El vidrio DVH (Doble Vidriado Hermético) es un tipo de vidrio aislante compuesto por dos hojas de vidrio separadas por un espacio de aire o gas noble, como el argón. Este espacio intermedio actúa como una barrera térmica, reduciendo la transferencia de calor y frío entre el interior y el exterior de un edificio.</h3>
                <h3 className="VidriosInfo">Además, el vidrio DVH también puede incluir una capa de vidrio laminado en una de las hojas exteriores para mejorar la resistencia al impacto y la seguridad. El vidrio DVH se utiliza comúnmente en ventanas y puertas de edificios, ya que ayuda a reducir los costos de calefacción y refrigeración y mejora el confort térmico en el interior.</h3>
              </div>

            <div className="Tarjetas">
                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={DVH} />
                  <Card.Body>
                    <Card.Title>Camara de 6mm - 20mm</Card.Title>
                    <Card.Text>
                    </Card.Text>
                  </Card.Body>
                </Card>

            </div>    
            </Tab.Pane>
            
            <Tab.Pane eventKey="Espejos">
              <div className="Presentacion-Tabs">
                <h2 className="Titulo-Tab">Espejos </h2>
              </div>

            <div className="Tarjetas">
                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Espejo} />
                  <Card.Body>
                    <Card.Title>Regulares 2MM - 6MM</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={EspejoRedondo} />
                  <Card.Body>
                    <Card.Title>Redondos 2MM - 6MM</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={EspejoGr} />
                  <Card.Body>
                    <Card.Title>Espejo Gris 4MM</Card.Title>
                      <Card.Text>
                      </Card.Text>
                  </Card.Body>
                </Card>
            </div>    
            </Tab.Pane>

            <Tab.Pane eventKey="Fantasia"> 
            <div className="Presentacion-Tabs">
                <h2 className="Titulo-Tab">Vidrios Fantasia </h2>
            </div>

            <div className="Tarjetas">
                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Stipolit} />
                  <Card.Body>
                    <Card.Title>Stipolit</Card.Title>
                      <Card.Text>
                      El vidrio Stipolit es un vidrio transparente que posee en una de sus caras una textura bidireccional decorativa que impide una visión clara pero que transmite la luz en forma difusa. Este vidrio es especial para baños o para habitaciones donde queres que entre luz natural, pero sin que se vea con definición.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Pacific} />
                  <Card.Body>
                    <Card.Title>Pacific</Card.Title>
                      <Card.Text>
                      El vidrio Pacific posee en una o ambas caras un dibujo o textura decorativa que impide la visión clara y transmite la luz en forma difusa brindando, según el diseño, diferentes grados de translucidez e intimidad. En arquitectura y decoración de interiores.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Austral} />
                  <Card.Body>
                    <Card.Title>Austral</Card.Title>
                      <Card.Text>
                      El vidrio Austral es un vidrio impreso que posee en una o ambas caras un dibujo o textura decorativa que impide la visión clara y transmite la luz en forma difusa brindando, según el diseño, diferentes grados de translucidez e intimidad. En arquitectura y decoración de interiores.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Acanalado} />
                  <Card.Body>
                    <Card.Title>Acanalado</Card.Title>
                      <Card.Text>
                      El vidrio acanalado es un tipo de vidrio que presenta surcos o canales en su superficie, lo que le otorga una apariencia estética y funcional única.
                      Es utilizado en la construcción y decoración de interiores, como en paredes divisorias, puertas, ventanas y techos, por su efecto decorativo, privacidad y reducción de la transmisión de sonido.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Martele} />
                  <Card.Body>
                    <Card.Title>Martele</Card.Title>
                      <Card.Text>
                      El vidrio martelé es un tipo de vidrio que presenta una superficie con un patrón de pequeñas protuberancias y depresiones, lo que le da una apariencia decorativa única.
                      Este vidrio se utiliza comúnmente en la construcción y decoración de interiores, como en puertas, ventanas, separadores de ambientes y mesas, por su efecto estético y de privacidad.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Armado} />
                  <Card.Body>
                    <Card.Title>Armado</Card.Title>
                      <Card.Text>
                      El vidrio armado se fabrica con una o más capas de malla metálica o de fibra de vidrio incrustadas entre capas de vidrio.
                      Este vidrio es resistente a los impactos, lo que lo hace adecuado para su uso en aplicaciones que requieren una mayor seguridad, como en ventanas, puertas y techos.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={StopSol} />
                  <Card.Body>
                    <Card.Title>Stop Sol</Card.Title>
                      <Card.Text>
                      El vidrio stop sol es un tipo de vidrio que incorpora un recubrimiento especial que reduce la cantidad de radiación solar que pasa a través de él.
                      Este vidrio se utiliza comúnmente en edificios y vehículos para reducir el deslumbramiento y el calor, y mejorar la eficiencia energética.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Opacid} />
                  <Card.Body>
                    <Card.Title>Opacid</Card.Title>
                      <Card.Text>
                      El vidrio opacid es un tipo de vidrio que se ha tratado con ácido o chorro de arena para crear una superficie mate y opaca.
                      Este vidrio se utiliza comúnmente en la construcción y decoración de interiores para proporcionar privacidad en ventanas, puertas, mamparas y particiones.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Sycamore} />
                  <Card.Body>
                    <Card.Title>Sycamore</Card.Title>
                      <Card.Text>
                      El vidrio Sycamore que posee en unas de sus caras una textura bidireccional decorativa que impide una vision clara y transmite la luz en forma difusa brindando, en los Sycamore, una privacidad maxima.
                      </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="Tarjeta" style={{ width: '18rem' }}>
                  <Card.Img className="img-tarjeta" variant="top" src={Esmerilado} />
                  <Card.Body>
                    <Card.Title>Esmerilado</Card.Title>
                      <Card.Text>
                      El vidrio esmerilado es un tipo de vidrio que ha sido tratado químicamente o con chorro de arena para crear una superficie mate y opaca.
                      Este vidrio se utiliza comúnmente en ventanas, puertas y particiones para proporcionar privacidad y controlar la entrada de luz.
                      </Card.Text>
                  </Card.Body>
                </Card>

            </div>           
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Vidrios;