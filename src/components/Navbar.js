import './Navbar.css';
import { Link,NavLink ,useHistory} from 'react-router-dom';
import React from 'react';
function NavBar(){
  
    return(
   <div> 
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Trips & Tours</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/adminHome">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/VisitingPoint">VisitingPoint</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Transport">Transport</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Hotels" >Hotels</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Complains" >Complains</NavLink>
        </li>
      </ul>
      <Link className='btn btn-outline-light' to="/"   >Log out</Link>
      </div>
    
    

  </div>
</nav> 
   </div>      

        
    )
}
export default NavBar;