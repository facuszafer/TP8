import React, { useContext, useState } from 'react';
import CarritoContext, { useCarrito } from './CarritoContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './Carrito.css';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [modalAbierto, setModalAbierto] = useState(false);

  const quitarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.price, 0);
  };

  const handleComprar = () => {
    setModalAbierto(true);
  };

  const handleCloseModal = () => {
    setModalAbierto(false);
  };

  return (
    <div className="carrito-fullscreen">
      <div className="carrito-container">
        <div className="carrito-header">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">FLECHA</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">Inicio</Link>
                <Link to="/Productos">Productos</Link>
                <Link to="/contacto">Contacto</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
            <ul>
              {carrito.map((producto) => (
                <li style={{ color: 'black' }} key={producto.id}>
                  {producto.title} - ${producto.price}
                  <button onClick={() => quitarProducto(producto.id)}>Quitar del Carrito</button>
                </li>
              ))}
            </ul>
            <h3>Total: ${calcularTotal()}</h3>
            <button
              onClick={handleComprar}
              style={{
                backgroundColor: '#E74C3C',
                color: '#FDEBD0',
                border: 'none',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Comprar
            </button>
            <Modal show={modalAbierto} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Compra Realizada</Modal.Title>
              </Modal.Header>
              <Modal.Body>Tu compra fue realizada con éxito.</Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
