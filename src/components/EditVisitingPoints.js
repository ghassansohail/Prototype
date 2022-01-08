import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useParams,useNavigate} from "react-router-dom";
function EditVisitingPoints()
{
    const navigate=useNavigate();
    const {id}=useParams(); 
    const [vpoint,setvpoint]=useState({
        name:"",
        city:""
    });
    const {name,city}=vpoint;
    useEffect(()=> {
        axios.get('//localhost:4000/visitingpoints/'+id)
        .then(function (response){
            setvpoint(response.data);
            console.log(response.data);
        }) 
        .catch(function (error){
            console.log(error);
        })
    },[]);
    const OnInputChange=e=>{
        setvpoint({...vpoint,[ e.target.name]: e.target.value})
    };
    const loadvpoint =async()=>
    {
      axios.get('//localhost:4000/visitingpoints')
            .then(function (response){
                const data=Array.from(response.data);
                setvpoint(data);
            })
    };
    const OnSubmit=(e)=>
    {
        e.preventDefault();
            axios.put('//localhost:4000/visitingpoints/'+id,vpoint)
            .then(function (response){
                setvpoint(response.data);
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
        <div className="container w-25">
          <h1 className="text-center mb-4">Edit VisitingPoint</h1>
        <form onSubmit={e=>OnSubmit(e)}>
  <div className="form-row align-items-center border shadow" >
    <div className="col-auto">
      <label className="sr-only" >Name</label>
      <input type="text" class="form-control mb-2" name="name" value={name} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto">
      <label className="sr-only" >City</label>
      <input type="text" className="form-control" name="city" value={city} onChange={e=>OnInputChange(e)}/>
    </div>
    <div className="col-auto text-center mt-4">
      <Link type="cancel" className="btn btn-warning pl-4" to="/VisitingPoint">Cancel</Link>
      <button type="submit" className="btn btn-primary pl-3">Update VisitingPoint</button>
    </div>
  </div>
</form>
        </div>

    )
    
}

export default EditVisitingPoints;