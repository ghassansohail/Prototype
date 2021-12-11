import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Plans from './components/pages/Plans';

function App() {
  return (
    <div className="App">      
       
       
       <Routes>       
        <Route path='/login' element={<Login/>}/> 
        <Route path='/plans' element={<Plans/>}/> 
        <Route  path='/' element={<Home/>} />
        
       </Routes>
       
    </div>
  );
}

export default App;
