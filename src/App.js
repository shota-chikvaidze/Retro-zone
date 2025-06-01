import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Cart } from './pages/cart/Cart'
import { SignIn } from './pages/signin/SignIn'
import { Registration } from './pages/signin/Registration'
import  { ProductFilters } from './components/productFilters/ProductFilters';
import Layout from './layout/Layout';
import Footer from './layout/Footer'
import ProductDetails from './components/furnitureParams/FurnitureParams'
import FurnitureCategories from './components/furnitureCategories/FurnitureCategories';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/signin' element={ <SignIn /> } />
        <Route path='/registration' element={ <Registration /> } />
        <Route path='/all-products' element={ <ProductFilters /> } />
        <Route path='/product-details/:id' element={ <ProductDetails /> } />
        <Route path='/categorie/:id' element={ <FurnitureCategories /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
