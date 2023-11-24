import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Carousel, Navbar, Nav } from 'react-bootstrap';

function DetalleProducto() {
  const [producto, setProductos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/' + id);
        setProductos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProducto();
  }, [id]);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">FLECHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/">Inicio</Link >
            <Link to="/Productos">Productos</Link >
            <Link to="/contacto">Contacto</Link >
            <Link to ="/Carrito">carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="detalle-container" style={{backgroundColor:'#FDEBD0', height:'max', marginBottom:'100%'}}>
        <div className="detalle-content " style={{backgroundColor:'#FDEBD0', height:'', marginBottom:'100%'}}>
          <h1>Detalles del Producto</h1>
          {producto ? (
            <>
              <div className="nuevo-producto-info">
                <h2>{producto.title}</h2>
                {producto.images && producto.images.length > 0 ? (
                  <Carousel>
                    {producto.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img src={image} alt={`Imagen ${index+1}`} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <p></p>
                )}
                <p>Marca: {producto.brand}</p>
                <p>Cantidad de stock: {producto.stock}</p>
                <p>Precio: ${producto.price}</p>
              </div>
            </>
          ) : (
            <p>No se encontró información del producto.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
