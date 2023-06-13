import React from 'react';
import Home from './pages/Home';
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Link, Route, redirect } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products/" element={<ProductList/>}></Route>
        <Route path="/product/" element={<Product/>}></Route>
        <Route path="/cart/" element={<Cart/>}></Route>
        <Route path="/login/" element={<Login/>}></Route>
        <Route path="/register/" element={<Register/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
