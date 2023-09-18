import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
//components
import NavComponent from './core/NavComponent';
import LifeOnMars from './pages/projects/LifeOnMars';
import HomePage from './pages/HomePage';
import FooterComponent from './core/FooterComponent';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import GrapaTinta from './pages/projects/GrapaTinta';
import Trainspotting from './pages/projects/Trainspotting';
import Illustration from './pages/projects/Illustration';
import Pels60 from './pages/projects/Pels60';

function App() {
  return (
    <div className="App">
     <NavComponent></NavComponent>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/work" element={<WorkPage />}></Route>
        <Route exact path="/lifeonmars" element={<LifeOnMars />}></Route>
        <Route exact path="/grapatinta" element={<GrapaTinta />}></Route>
        <Route exact path="/trainspotting" element={<Trainspotting />}></Route>
        <Route exact path='/pels60' element={<Pels60 />}></Route>
        <Route exact path="/illustration-projects" element={<Illustration />}></Route>
      </Routes>
    <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
