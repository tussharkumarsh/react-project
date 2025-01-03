import HeaderComponent from './components/header-component/HeaderComponent';
import HomePage from "./features/home-page/HomePage";
import CartPage from "./features/cart-page/CartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import ProductDetail from 'features/product-detail-page/ProductDetail';

function App() {
  return (
    <div>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/cart' Component={CartPage} />
          <Route path='/product-detail/:id' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;