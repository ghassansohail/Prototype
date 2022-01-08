import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Plans from './components/pages/Plans';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import User from './components/pages/User'
import SignUp from './components/pages/Signup'

import NavBar  from './components/Navbar';
import VisitingPoint from './components/VisitingPoint';
import Transport from './components/Transport';
import Hotels from './components/Hotels';
import Complains from './components/Complains';
import AdminHome from './components/pages/AdminHome';
import NotFound from './components/Notfound';
import EditVisitingPoints from './components/EditVisitingPoints';
import EditTour from './components/EditTour';
import EditTransport from './components/EditTransport';













function App() {
  return (
    <div className="App">      
       <>
       
       <Routes basename={process.env.PUBLIC_URL}>       
        <Route path='/login' element={<Login/>}/> 
        <Route path='/plans' element={<Plans/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/user' element={<User/>}/> 
        <Route path='/signup' element={<SignUp/>}/> 

         <Route exact path="/VisitingPoint" element={<VisitingPoint/>}/>
         <Route exact path="/Transport" element={<Transport/>}/>
         <Route exact path="/Hotels" element={<Hotels/>}/>
         <Route exact path="/Complains" element={<Complains/>}/>
         <Route exact path="/EditTransport/:id" element={<EditTransport/>}/>
         <Route exact path="/EditVisitingPoints/:id" element={<EditVisitingPoints/>}/>
         <Route exact path="/adminHome" element={<AdminHome/>}/>
         <Route exact path="/EditTour/:id" element={<EditTour/>}/>              
         <Route path='/' element={<Home/>} />         
        
       </Routes>
       </>
    </div>
  );
}

export default App;
