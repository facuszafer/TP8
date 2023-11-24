// src/ContactFormBootstrap.js
import React from 'react';
import { Container, Form, Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactFormBootstrap = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{backgroundColor:'#E74C3C'}}>
        <Navbar.Brand href="#home">FLECHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to ="/">Inicio</Link >
            <Link to ="/Productos">Productos</Link >
            <Link to ="/Contacto">Contacto</Link>
            <Link to ="/Carrito">carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
<body style={{backgroundColor:'#FDEBD0', marginBottom:'0px'}}>
      <Container  style={{backgroundColor:'#FDEBD0'}}>
        <h1>Formulario de Contacto</h1>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo electrónico" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
  </body>
    </div>
  );
}

export default ContactFormBootstrap;
