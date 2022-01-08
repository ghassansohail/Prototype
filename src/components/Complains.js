import React ,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import NavBar from "./Navbar";

function Complains(){
    const [complain,setcomplain]=useState([]);

    useEffect(()=> {
        axios.get('//localhost:4000/complains')
        .then(function (response){
            setcomplain(response.data);
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
            <h1 className="text-center mb-4">List of Complains</h1>
        <table className="table caption-top border shadow">
            
            <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Services</th>
            <th scope="col">Complain</th>
            
        </tr>
            </thead>
      <tbody>
        {complain.map((c,index)=>(
            <tr>
          <th scope="row">{index+1}</th>
          <td key={c.id} >{c.service}</td>
          <td >{c.comment}</td>
        </tr>
        ))
        }
      </tbody>
    </table>
            </div>
            </>
    )
}
export default Complains;