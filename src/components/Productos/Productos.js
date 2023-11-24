import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
  import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Productos.css';
import CarritoContext, { useCarrito } from '../Carrito/CarritoContext'; // Importamos el contexto


function Productos() { 
  const [productos, setProductos] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { carrito, setCarrito } = useContext(CarritoContext); 
  
  
  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  /*useEffect(() => {
    setProductos(Productos);
  }, []);*/

  useEffect(() => {
    let apiUrl = 'https://dummyjson.com/products';
    if (selectedCategory) {
      apiUrl += `/category/${selectedCategory}`;
    }

    axios.get(apiUrl)
      .then(response => {
        setProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, [selectedCategory]);

  const handleSearch = () => {
    let apiUrl = 'https://dummyjson.com/products';
    if (searchText) {
      apiUrl += `/search?q=${searchText}`;
    }

    axios.get(apiUrl)
      .then(response => {
        setProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">FLECHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to ="/">Inicio</Link >
            <Link to ="/Productos">Productos</Link >
            <Link to ="/contacto">Contacto</Link >
            <Link to ="/Carrito">carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="nuevo-container" style={{backgroundColor:'#FDEBD0'}}>
        <div className="nuevo-content" style={{backgroundColor:'#FDEBD0'}}>
          <h1>Lista de Productos</h1>
          <input
            type="text"
            id="search"
            placeholder="Buscar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button id="botonSearch" onClick={handleSearch}>Buscar</button>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
          </select>

          <table className="nuevo-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((element, index) => (
                <tr key={index}>
                  <td>{element.title}</td>
                  <td>{element.description.substring(0, 50)}...</td>
                  <td>${element.price}</td>
                  <td>
                    <nav>
                      <Link to={{ pathname: "/DetalleProducto/" + element.id }}>
                        <button className="nuevo-verMas">Ver Más</button>
                      </Link>

                      <Link to={{ pathname: "/Carrito/" }}>
                        <button className="nuevo-verMas" onClick={() => agregarProducto(element)}>
                        Agregar al Carrito
                        </button>
                      </Link>
                    </nav>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Productos;
