import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
//components
import NavComponent from './core/NavComponent';
import LifeOnMars from './pages/projects/LifeOnMars';
import HomePage from './pages/HomePage';
import FooterComponent from './core/FooterComponent';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <div className="App">
     <NavComponent></NavComponent>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/work" element={<WorkPage />}></Route>
        <Route exact path="/lifeonmars" element={<LifeOnMars />}></Route>
      </Routes>
    <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
