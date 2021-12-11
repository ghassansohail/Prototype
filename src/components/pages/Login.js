import React, {Component} from "react";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './Login.css'
import BsNav from "../Bs-Nav";
function Login() {
    return (
    
    <>
<BsNav/>
<br/>
<br/><br/>

<div className="container mb-3">
  
  <div className="fr mt-5 p-5 bg-dark text-white rounded col-12 "  >
    <h1>Trips n Tour</h1> 
    <h2>Sign in</h2> 
    <br/>


<Form>

  <Form.Group className="mb-3 tt" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 tt" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>

</>
    )
}
export default Login;