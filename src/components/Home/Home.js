import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListadoProducto from "../ListadoProducto/listadoProducto";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    let apiUrl = 'https://dummyjson.com/products';
    
    axios.get(apiUrl)
      .then(response => {
        setProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <ListadoProducto tope="6" Productos={productos}></ListadoProducto>    
    </>
  );
 };
 
export default Home;
