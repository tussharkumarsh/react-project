import './App.scss';
import HeaderComponent from './components/header-component/HeaderComponent';
import HomePage from "./features/home-page/HomePage";
import CartPage from "./features/cart-page/CartPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/cart' Component={CartPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
