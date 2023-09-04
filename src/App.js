import HeroComponent from './components/HeroComponent';
import SelectedWorks from './components/SelectedWorks';
import NavComponent from './core/NavComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <HeroComponent></HeroComponent>
      <SelectedWorks></SelectedWorks>
    </div>
  );
}

export default App;
