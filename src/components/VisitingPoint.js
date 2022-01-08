import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import {Link ,useNavigate} from "react-router-dom";
import NavBar from "./Navbar";
import { Navbar } from "react-bootstrap";

function VisitingPoint(){
    
        const [vpoint,setvpoint]=useState([]);
        const navigate=useNavigate();
        const[vpoint1,setvpoint1]=useState({
            name:"",
            city:""
        });
        const {name,city}=vpoint1;
        
        useEffect(()=> {
            axios.get('//localhost:4000/visitingpoints')
            .then(function (response){
              const data=Array.from(response.data);
              setvpoint(data);
            console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
        },[]);
        const OnInputChange=e=>{
          setvpoint1({...vpoint1,[ e.target.name]: e.target.value})
      };
      const OnSubmit=(e)=>
      {
          e.preventDefault();
          axios.post('//localhost:4000/visitingpoints',vpoint1)
          .then(function (response){
            const data=Array.from(response.data);
            setvpoint(data);
          console.log(response.data);
          loadvpoint();
          })
          .catch(function (error){
              console.log(error);
          
      })
      loadvpoint();
          navigate("/VisitingPoint");
          
          
      };
      const loadvpoint =async()=>
      {
        axios.get('//localhost:4000/visitingpoints')
              .then(function (response){
                  const data=Array.from(response.data);
                  setvpoint(data);
              })
      };
      const deletevpoint=id=>{
        axios.delete('//localhost:4000/visitingpoints/'+id)
        .then(function (response){
          const data=Array.from(response.data);
              setvpoint(data);
        console.log(response.data);
        loadvpoint();
        })
        .catch(function (error){
            console.log(error);
       
    })
    loadvpoint();
    navigate("/VisitingPoint");
    };
        
        return(
          <>
          <NavBar/>
          <br/>
            
            <div className="container">
            <div>
            <h1 className="text-center mb-4">Add Visiting Point</h1>
            <form onSubmit={e=>OnSubmit(e)}>
  <div class="form-row align-items-center d-flex justify-content-between">
  
    <div class="col-auto">
      <label class="sr-only mt-3" >Name</label>
      <input type="text" class="form-control mb-2 mt-2"  name="name" value={name} onChange={e=>OnInputChange(e)} />
    </div>
    <div class="col-auto">
      <label class="sr-only mt-3" >City</label>
      <input type="text" class="form-control mb-2 mt-2"  name="city" value={city} onChange={e=>OnInputChange(e)} />
    </div>
      <div class="col-auto">
      <button type="submit" class="btn btn-primary mt-5 mb-2">Add Visiting Point</button>
    </div>
  </div>
</form>
            </div>
                
        <table className="table caption-top border shadow">
            <caption>List of VisitingPoints</caption>
            <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
           
            
        </tr>
            </thead>
      <tbody>
        {vpoint.map((v,index)=>(
            <tr>
          <th scope="row">{index+1}</th>
          <td key={v.id}>{v.name}</td>
          <td>{v.city}</td>
          
          <td >

              <Link className="btn btn-outline-primary ml-5" to={"/EditVisitingPoints/"+v.id}>Edit</Link>
              <Link className="btn btn-danger ml-5" onClick={()=>deletevpoint(v.id)} to="/VisitingPoint">Delete</Link>
             
          </td>
        </tr>
        ))
        }
      </tbody>
    </table>
            </div>
            </>
        )
   
}
export default VisitingPoint;