import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Plans from './components/pages/Plans';
import About from './components/pages/About';
import Admin from './components/pages/Admin';
import User from './components/pages/User';
import BsNav from './components/Bs-Nav'
import Cards from './components/Cards'
import Hero from './components/HeroSection';


function App() {
  return (
    <div className="App">      
       <Cards/>       
       <Hero/>
       <Admin/>
       <User/>
       
       
       
       
       {/* <Routes>       
        <Route path='/Prototype/#/login' element={<Login/>}/> 
        <Route path='/Prototype/#/plans' element={<Plans/>}/> 
        <Route path='/Prototype/#/about' element={<About/>}/> 
        <Route  path='/Prototype' element={<Home/>} />
        
       </Routes> */}
       
    </div>
  );
}

export default App;
