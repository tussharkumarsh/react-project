import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import HomePage from "./Features/home-page/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <HeaderComponent />
      <HomePage />
    </div>
  );
}

export default App;
