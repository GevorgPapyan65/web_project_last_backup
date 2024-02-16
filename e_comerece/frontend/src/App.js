import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
import { store, persistor } from './redux/store';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Product/:id' element={<Product />} />
            <Route path='/ProductList' element={<ProductList />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Logout' element={<Logout />} />
            <Route path="/login" element={user == null ? <Navigate to="/" replace /> : <Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>

  );
}

export default App;
