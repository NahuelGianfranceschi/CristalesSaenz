import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Contacto.css"

function Contact() {
  return (
    <Form className='ContactoDiv'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Mail</Form.Label>
          <Form.Control type="email" placeholder="Mail" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Direccion</Form.Label>
        <Form.Control placeholder="Direccion" />
      </Form.Group>


      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Localidad</Form.Label>
          <Form.Control />
        </Form.Group>


        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Codigo Postal</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridText">
          Texto       
          <Form.Control type="text" placeholder="Texto" />
        </Form.Group>  
      </Row>
      

      <Button className='botoncon' variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contact;