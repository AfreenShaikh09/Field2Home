import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/About';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';

function App() {
  return (
    <>
    <div className="page-wrapper">
      <Nav />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;

