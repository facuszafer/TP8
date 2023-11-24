import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Contacto from "./components/contacto/Contacto";
import Productos from "./components/Productos/Productos";
import DetalleProducto from "./components/DetalleProducto/DetalleProducto";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carrito from './components/Carrito/Carrito';
import CarritoContext from './components/Carrito/CarritoContext';

const App = () => {
  const [carrito, setCarrito] = useState([]);

  /*useEffect(() => {
    console.log(productos);
  }, [productos]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const arrayProductos = response.data.products;
        setProductos(arrayProductos);
      })
  }, []); */

  return (
    <>
      <CarritoContext.Provider value={{carrito, setCarrito}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Productos" element={<Productos/>}></Route>
            <Route path="/DetalleProducto/:id" element={<DetalleProducto />}></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/Carrito" element={<Carrito />}></Route>
          </Routes>
        </BrowserRouter>
      </CarritoContext.Provider>
    </>
  );
 };
 
export default App;