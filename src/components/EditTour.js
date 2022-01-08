import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useParams,useNavigate} from "react-router-dom";

function EditTour()
{
    const navigate=useNavigate();
    const [hotel,sethotel]=useState([]);
    const {id}=useParams(); 

    const[hotel1,sethotel1]=useState({
        name:"",
        location:"",
        Price:"",
        category:""
    });
    const {name,location,Price,category}=hotel1;
    useEffect(()=> {
        axios.get('//localhost:4000/hotel/'+id)
        .then(function (response){
            sethotel1(response.data);
            console.log(response.data);
        }) 
        .catch(function (error){
            console.log(error);
        })
    },[]);
    const OnInputChange=e=>{
        sethotel1({...hotel1,[ e.target.name]: e.target.value})
    };
    const OnSubmit=(e)=>
    {
        e.preventDefault();
            axios.put('//localhost:4000/hotel/'+id,hotel1)
            .then(function (response){
                sethotel(response.data);
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
    
    return(
        <div className="container w-25">
          <h1 className="text-center mb-4">Edit Hotel</h1>
        <form onSubmit={e=>OnSubmit(e)}>
  <div className="form-row align-items-center border shadow" >
    <div className="col-auto">
      <label className="sr-only" >Name</label>
      <input type="text" class="form-control mb-2" name="name" value={name} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto">
      <label className="sr-only" >Location</label>
      <input type="text" className="form-control" name="location" value={location} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto">
      <label className="sr-only" >Category</label>
      <input type="text" className="form-control" name="category" value={category} onChange={e=>OnInputChange(e)}/>
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
    <div className="col-auto text-center mt-4">
      <Link type="cancel" className="btn btn-warning pl-4" to="/Hotels">Cancel</Link>
      <button type="submit" className="btn btn-primary pl-3">Update Hotel</button>
    </div>
  </div>
</form>
        </div>

    )
    
}
export default EditTour;