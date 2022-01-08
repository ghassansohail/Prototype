import React ,{useState,useEffect} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import NavBar from "./Navbar";


function Transport(){
    const [transport,settransport]=useState([]);
    const navigate=useNavigate();
    const[transport1,settransport1]=useState({
        registration:"",
        category:"",
        Price:""
    });
    const {registration,category,Price}=transport1;
    
    useEffect(()=> {
        axios.get('//localhost:4000/transport')
        .then(function (response){
          const data=Array.from(response.data);
          settransport(data);
        console.log(response.data);
        })
        .catch(function (error){
            console.log(error);
        })
    },[]);
    const OnInputChange=e=>{
      settransport1({...transport1,[ e.target.name]: e.target.value})
  };
  const OnSubmit=(e)=>
  {
      e.preventDefault();
      axios.post('//localhost:4000/transport',transport1)
      .then(function (response){
        const data=Array.from(response.data);
          settransport(data);
      console.log(response.data);
      loadtransport();
      })
      .catch(function (error){
          console.log(error);
      
  })
  loadtransport();
      navigate("/Transport");
      
      
  };
  const loadtransport =async()=>
    {
      axios.get('//localhost:4000/transport')
            .then(function (response){
                const data=Array.from(response.data);
                settransport(data);
            })
    };
  const deletetransport=id=>{
    axios.delete('//localhost:4000/transport/'+id)
    .then(function (response){
      const data=Array.from(response.data);
          settransport(data);
          loadtransport();
    console.log(response.data);
    })
    .catch(function (error){
        console.log(error);
    
})
loadtransport();
navigate("/Transport");
};
    return(

      <>
          <NavBar/>
          <br/>
        <div className="container">
            <div>
            <h1 className="text-center mb-4">Add Transport</h1>
        <form onSubmit={e=>OnSubmit(e)}>
  <div class="form-row align-items-center d-flex justify-content-between">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Category</label>
      <input type="text" class="form-control mb-2"  name="category" value={category} onChange={e=>OnInputChange(e)} />
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Registration #</label>
      <input type="text" class="form-control mb-2" name="registration" value={registration} onChange={e=>OnInputChange(e)} />
    </div>
    <div class="col-auto">
      <label class="sr-only" >Price</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">Rs</div>
        </div>
        <input type="text" class="form-control" name="Price" value={Price} onChange={e=>OnInputChange(e)}/>
      </div>
    </div>
      <div class="col-auto">
      <button type="submit" class="btn btn-primary mt-3">Add Transport</button>
    </div>
  </div>
</form>
        </div>
        <table className="table caption-top border shadow">
            <caption>List of Vehicles</caption>
            <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Registration #</th>
            <th scope="col">Price</th>
            
        </tr>
            </thead>
      <tbody>
        {transport.map((t,index)=>(
            <tr>
          <th scope="row">{index+1}</th>
          <td key={t.id}>{t.category}</td>
          <td>{t.registration}</td>
          <td>{t.Price}</td>
          
          <td>
              <Link className="btn btn-outline-primary mr-2" to={"/EditTransport/"+ t.id}>Edit</Link>
              <Link className="btn btn-danger" onClick={()=>deletetransport(t.id)} to="/Transport">Delete</Link>
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
export default Transport;