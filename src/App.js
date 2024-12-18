import './App.scss';
import HeaderComponent from './components/header-component/HeaderComponent';
import HomePage from "./Features/home-page/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HeaderComponent />

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <HomePage />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
