import HeaderComponent from 'components/header-component/HeaderComponent';
import HomePage from "./Features/home-page/HomePage";
import CartPage from "./Features/cart-page/CartPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
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
