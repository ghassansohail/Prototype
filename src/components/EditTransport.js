import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useParams,useNavigate} from "react-router-dom";
function EditTransport()
{
    const navigate=useNavigate();
    const [transport1,settransport1]=useState([]);
    const {id}=useParams(); 
    const [transport,settransport]=useState({
        registration:"",
        category:"",
        Price:""
    });
    const {registration,category,Price}=transport;
    useEffect(()=> {
        axios.get('//localhost:4000/transport/'+id)
        .then(function (response){
            settransport(response.data);
            console.log(response.data);
        }) 
        .catch(function (error){
            console.log(error);
        })
    },[]);
    const OnInputChange=e=>{
        settransport({...transport,[ e.target.name]: e.target.value})
    };
    const loadtransport =async()=>
    {
      axios.get('//localhost:4000/transport')
            .then(function (response){
                const data=Array.from(response.data);
                settransport(data);
            })
    };
    const OnSubmit=(e)=>
    {
        e.preventDefault();
            axios.put('//localhost:4000/transport/'+id,transport)
            .then(function (response){
                settransport1(response.data);
            console.log(response.data);
            loadtransport();
            })
            .catch(function (error){
                console.log(error);
            
        })
        loadtransport();
        navigate("/Transport");
    };
    return(
        <div className="container w-25">
          <h1 className="text-center mb-4">Edit Transport</h1>
        <form onSubmit={e=>OnSubmit(e)}>
  <div className="form-row align-items-center border shadow" >
    <div className="col-auto">
      <label className="sr-only" >Registration #</label>
      <input type="text" class="form-control mb-2" name="registration" value={registration} onChange={e=>OnInputChange(e)}/>
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
      <Link type="cancel" className="btn btn-warning pl-4" to="/Transport">Cancel</Link>
      <button type="submit" className="btn btn-primary pl-3">Update Transport</button>
    </div>
  </div>
</form>
        </div>

    )
    
}

export default EditTransport;