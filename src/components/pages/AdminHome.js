import React ,{useState,useEffect} from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import NavBar from "../Navbar";
import { Navbar } from "react-bootstrap";


function AdminHome(){
    const [tours,settours]=useState([]);

    
    useEffect(()=> {
        axios.get('//localhost:4000/tours')
        .then(function (response){
            settours(response.data);
        console.log(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
    },[]);
    
    return(
        <>
    <NavBar/>
    <br/>
    <div className="container">
        
            <h1 className="text-center mb-5" > List of Tours </h1>
    <table className="table caption-top border shadow ">
       
        <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Visiting Points</th>
        <th scope="col">Transport</th>
        <th scope="col">Hotel</th>
        <th scope="col">Start Location</th>
        <th scope="col">Date</th>
        <th scope="col">Total Days</th>
        
    </tr>
        </thead>
  <tbody>
    {tours.map((tour,index)=>(
        <tr>
      <th scope="row">{index+1}</th>
      <td>{tour.name}</td>
      <td>{tour.transport}</td>
      <td>{tour.hotel}</td>
      <td>{tour.start}</td>
      <td>{tour.date}</td>
      <td>{tour.totaldays}</td>
      <td >
          
         
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
export default AdminHome;