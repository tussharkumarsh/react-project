import HeaderComponent from './components/header-component/HeaderComponent';
import HomePage from "./features/home-page/HomePage";
import CartPage from "./features/cart-page/CartPage";
import ProductDetail from 'features/home-page/container/productDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/cart' Component={CartPage} />
          <Route path='/product-detail' Component={ProductDetail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
