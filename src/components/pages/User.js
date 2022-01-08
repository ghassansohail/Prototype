import './User.css'
import UserNav from './UserNav'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import user from './user.jpg'
import classes from './User.css';
import Button from '@mui/material/Button';




function User (){

  const color = "whitesmoke";
    const [city, setAge] = React.useState('Select');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };




    const [agee, setAgee] = React.useState('Select');
  
    const handleChangee = (event) => {
      setAgee(event.target.value);
    };



    const [vechile, setvechile] = React.useState('Select');
  
    const handleChanged = (event) => {
      setvechile(event.target.value);
    };

    const [hotel, sethotel] = React.useState('Select');
  
    const handleChangeed = (event) => {
      sethotel(event.target.value);
    };


return (

  
 <div className="user">
<UserNav/>

<h1 style={{color: "white", marginTop:"60px"}}>Customize your Tour</h1>

{/* <div className="b"> */}


<div style={{marginTop:"40px"}}>

<span style={{marginLeft:"40px" , fontSize: "30px", color: "white"}}> Select Pick Up Location </span>

<span style={{color: "white"}} >

      <FormControl   sx={{ m: 0, minWidth: 150, color:"white" }} >
      <InputLabel style={{marginLeft:"50px",marginTop:"-10px", color:"white"}} id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select style={{height: "35px", width: "450px", color:"white", marginLeft:"50px",
        border:'3px solid white'}} 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={city}
          onChange={handleChange}
          label="City"
         >
          <MenuItem value={10}>Lahore</MenuItem>
          <MenuItem value={20}>Multan</MenuItem>
          <MenuItem value={30}>Karachi</MenuItem>
          <MenuItem value={40}>Jhang</MenuItem>
          <MenuItem value={50}>Faislabad</MenuItem>
 
        </Select>
      </FormControl>

    
    </span>

    </div>

    <div style={{marginTop:"30px"}}>

    <span  style={{marginLeft:"35px" , fontSize: "30px", color: "white"}} > Select Destination </span>

<span style={{marginLeft:"120px"}}>

      <FormControl     sx={{ m: 0, minWidth: 150 }} >
      <InputLabel style={{marginLeft:"0px", color:"white", marginTop:"-10px"}} id="demo-simple-select-autowidth-label">City</InputLabel>
        <Select style={{border:'3px solid white',height: "35px", width: "450px" , marginLeft:"0px", color:"whitesmoke"}}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={agee}
          onChange={handleChangee}
          label="Select"
         >
          <MenuItem value={10}>Swat</MenuItem>
          <MenuItem value={20}>Kashmir</MenuItem>
          <MenuItem value={30}>Gilgit</MenuItem>
          <MenuItem value={40}>Murree</MenuItem>
          <MenuItem value={50}>Hunza</MenuItem>
    
        </Select>
      </FormControl>

    
    </span>

    </div>


    <div style={{marginTop:"40px", marginLeft: "275px", textAlign:"left"}}>

    
    <span style={{marginLeft:"0px" , fontSize: "20px",color: "white"   }}> Check In </span>
    
    <span style={{marginLeft:"220px" , fontSize: "20px", color: "white"}}> Check Out </span>
    
    <span style={{marginLeft:"205px" , fontSize: "20px", color: "white"}}> People </span>



    </div>

<div style={{marginTop:"40px", marginLeft: "275px", textAlign:"left"}}>
<TextField
        style={{border:'3px solid white'}}
        id="date"
        
 
        className={classes.textField}
        type="date"
        sx={{ width: 220,color:"white",svg: { color }, label:{color}, input: { color }   }}
        InputLabelProps={{
          shrink: true,
          
          
        }}
        ></TextField>



<TextField
        style={{ marginLeft: "80px", color: "white",border:'3px solid white'}}
        id="date"
        type="date"
        sx={{ width: 220, label:{color}, input: { color }}}
        InputLabelProps={{
          shrink: true,
        }}
        ></TextField>

  <TextField
      //  style={{ marginLeft: "80px", color: "white",height:"10px", border:'1px solid white'}}
      style={{ marginLeft: "80px", color: "white",border:'3px solid white'}}
    
      id="outlined-number"
          type="number"
          sx={{width: 220,label:{color}, input: { color }}}
          InputLabelProps={{
            shrink: true,

            
          }}         
          ></TextField>


</div>



<div style={{marginTop:"40px", marginLeft: "275px", textAlign:"left"}}>
<span style={{marginLeft:"0px" , fontSize: "25px", color: "white"   }}> Preferred Vechile Type: </span>    
    <span style={{marginLeft:"220px" , fontSize: "25px", color: "white"}}> Preferred Accommodation:  </span>


</div>


<div className="b">

<span >

      <FormControl    sx={{ m: 0, minWidth: 150 }} >
      <InputLabel style={{marginLeft:"270px", color:"white",marginTop:"-10px"}} id="demo-simple-select-autowidth-label">Vechile</InputLabel>
        <Select style={{border:'3px solid white',height: "35px", width: "350px" , marginLeft:"270px", color:"white"}} 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={vechile}
          onChange={handleChanged}
          label="vechile"
         >
          <MenuItem value={10}>Subcompact</MenuItem>
          <MenuItem value={20}>Compact</MenuItem>
          <MenuItem value={30}>Luxury</MenuItem>
         
        </Select>
      </FormControl>

    
    </span>



    <span >

<FormControl    sx={{ m: 0, minWidth: 150 }} >
<InputLabel style={{marginLeft:"130px", color:"white", marginTop:"-10px"}} id="demo-simple-select-autowidth-label">Hotel</InputLabel>
  <Select style={{border:'3px solid white',height: "35px", width: "350px" , marginLeft:"130px", color:"white"}} 
    labelId="demo-simple-select-standard-label"
    id="demo-simple-select-standard"
    value={hotel}
    onChange={handleChangeed}
    label="hotel"
   >
    <MenuItem value={10}>Comfort</MenuItem>
    <MenuItem value={20}>Quality </MenuItem>
    <MenuItem value={30}>Luxury</MenuItem>
    
  </Select>
</FormControl>


</span>



</div>


<br></br>
<br></br>


<Button style={{width:"550px"}} variant="contained">Book Tour</Button>
<br></br>
<br></br>
<br></br>

    </div>

  
  

)
}

export default User;