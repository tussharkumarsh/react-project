import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent'; 
import HeroComponent from './Features/Component/HeroComponent/HeroComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <HeaderComponent />
      <HeroComponent />
    </div>
  );
}

export default App;
