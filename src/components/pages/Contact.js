import React from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'
import call from './call.png'
import email from './email.png'
import BsNav from '../Bs-Nav'

function Contact(){

return(
<>
<BsNav/>
<br/><br/><br/><br/>

<h1 style={{color: "black", fontSize: "5em" }} >
    Contact Us
</h1>
<br/>

{/* <Container> */}
  <Row>
    <Col xs={12} sm={6}>

<Card style={{ alignContent:'center' , maxWidth:'30em' , width: 'auto', height: '20rem', margin: "auto" }}>
  <Card.Body>
    <Card.Title><img style={{height: "2.5em", width: "2.5em"}} src={call}></img></Card.Title>
    <br/>
    <Card.Subtitle className="mb-2 ">Call Us</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">+92 xxx-xxx-xxxx </Card.Link>
    
  </Card.Body>
</Card>
</Col>
<Col xs={12} sm={6}>
<Card style={{ alignContent:'center' , maxWidth:'30em' , width: 'auto', height: '20rem', margin: "auto" }}>
  <Card.Body>
    <Card.Title><img style={{height: "2.5em", width: "2.5em"}} src={email}></img></Card.Title>
    <br/>
    <Card.Subtitle className="mb-2 ">Send Us an Email</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Contact@TripsNTour.com </Card.Link>
    
  </Card.Body>
</Card>
</Col>
</Row>
{/* </Container> */}
</>


)
}

export default Contact;