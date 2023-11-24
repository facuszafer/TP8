import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarritoContext, { useCarrito } from '../Carrito/CarritoContext'; // Importamos el contexto

const ListadoProducto = ({ Productos, tope }) => {
  const [random, setRandom] = useState([]);
  const { carrito, setCarrito } = useContext(CarritoContext); // Utilizamos el hook del contexto

  useEffect(() => {
    Random(Productos, tope);  
  }, [Productos, tope]);

  const Random = (arrayProductos, tope) => {
    const randomProducts = arrayProductos
      .map((producto, index) => ({ producto, random: Math.random() }))
      .sort((a, b) => a.random - b.random)
      .slice(0, tope)
      .map(item => item.producto);

    setRandom(randomProducts);
  };

  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">FLECHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">Inicio</Link>
            <Link to ="/Productos">Productos</Link >
            <Link to ="/Contacto">Contacto</Link>
            <Link to ="/Carrito">carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="listado-container" style={{backgroundColor:'#FDEBD0'}}>
        <div className="row">
          {random.map((product, index) => (
            <div key={index} className="col-md-4">
              <div className="product-card">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <button className="nuevo-verMas" onClick={() => agregarProducto(product)}>
                      Agregar al Carrito
                    </button>
                    <Link to={{ pathname: "/DetalleProducto/" + product.id }}>
                      <button className="nuevo-verMas">Ver Más</button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListadoProducto;

