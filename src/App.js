import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './pages/Home';
import {AboutMe} from './pages/AboutMe';
import {Projects} from './pages/Projects';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/me' element={<AboutMe/>} />
      <Route path='/projects' element={<Projects/>} />
    </Routes>
    </div>
  );
}

export default App;
