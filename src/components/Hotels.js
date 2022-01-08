import React ,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import NavBar from "./Navbar";

function Hotels(){
    
    const navigate=useNavigate();
    const [hotel,sethotel]=useState([]);
    const[hotel1,sethotel1]=useState({
        name:"",
        location:"",
        Price:"",
        category:""
    });
    const {name,location,Price,category}=hotel1;
    
        useEffect(()=> {
            axios.get('//localhost:4000/hotel')
            .then(function (response){
                const data=Array.from(response.data);
                sethotel(data);
            console.log(response.data);
            })
            .catch(function (error){
                console.log(error);
            })
        },[]);    
    const OnInputChange=e=>{
        sethotel1({...hotel1,[ e.target.name]: e.target.value})
    };
    const OnSubmit=async e=>
    {
        e.preventDefault();
        await axios.post('//localhost:4000/hotel',hotel1)
        .then(function (response){
          const data=Array.from(response.data);
          sethotel(data);
        console.log(response.data);
        })
        .catch(function (error){
            console.log(error);
        
    })
    loadhotels();
        navigate("/Hotels");
        
        
    };
    const loadhotels =async()=>
    {
      axios.get('//localhost:4000/hotel')
            .then(function (response){
                const data=Array.from(response.data);
                sethotel(data);
            })
    };
    const deletehotel=id=>{
        axios.delete('//localhost:4000/hotel/'+id)
        .then(function (response){
          const data=Array.from(response.data);
          sethotel(data);
        console.log(response.data);
        loadhotels();
        })
        .catch(function (error){
            console.log(error);
        
    })
    loadhotels();
    navigate("/Hotels");
    
    };
    
    return(
      <>
          <NavBar/>
          <br/>
<div className="container">
<div>
<h1 className="text-center mb-4">Add Hotel</h1>
        <form onSubmit={e=>OnSubmit(e)}>
  <div className="form-row align-items-center d-flex justify-content-between">
    <div className="col-auto">
      <label className="sr-only" >Hotel Name</label>
      <input type="text" className="form-control mb-2" name="name" value={name} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto">
      <label className="sr-only" >Location</label>
      <input type="text" className="form-control" name="location" value={location} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto">
      <label className="sr-only" >Category</label>
      <input type="text" class="form-control mb-2" name="category" value={category} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto">
      <label className="sr-only" >Price</label>
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">Rs</div>
        </div>
      <input type="number" className="form-control" name="Price" value={Price} onChange={e=>OnInputChange(e)}/>
      </div>
    </div>
    <div className="col-auto">
      <button type="submit"  class="btn btn-primary  mt-3">Add Hotel</button>
    </div>
  </div>
</form>
        </div>
            <table className="table caption-top border shadow">
                <caption>List of Hotels</caption>
                <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Location</th>
                <th scope="col">Price</th>
                
            </tr>
                </thead>
          <tbody>
            {hotel.map((h,index)=>(
                <tr>
              <th scope="row">{index+1}</th>
              <td key={h.id}>{h.name}</td>
              <td>{h.category}</td>
              <td>{h.location}</td>
              <td>{h.Price}</td>
              <td>
            
                  <Link className="btn btn-outline-primary mr-2" to={'/EditTour/'+h.id}>Edit</Link>
                  <Link className="btn btn-danger"onClick={()=>deletehotel(h.id)} to="/Hotels">Delete</Link>
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
export default Hotels;