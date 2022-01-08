import React from "react"
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import hunza from './Hunza.jpeg'
import './Cards.css'
import {Link} from 'react-router-dom'


function Cards(){    
return (
<>

<div className="cr">
<h2 style={{paddingTop: 50 }}> Checkout our Amazing Trips </h2>
<Container>
  <Row>
    <Col >
    <Card  className="cards"style={{ width: '25rem'}}>
  <Card.Img variant="top" src={hunza} />
  <Card.Body>
    <Card.Title>Hunza Valley</Card.Title>
    <Card.Text>
      Lorem Ipsum  
    </Card.Text>
    <Link to="/login"><Button variant="primary">Let's Go </Button></Link>
  </Card.Body>
</Card></Col>


    <Col >
    <Card  className="cards"style={{ width: '25rem' }}>
  <Card.Img variant="top" src={hunza} />
  <Card.Body>
    <Card.Title>Hunza Valley  </Card.Title>
    <Card.Text>
      Lorem Ipsum  
    </Card.Text>
    <Link to="/login"><Button variant="primary">Let's Go </Button></Link>
  </Card.Body>
</Card>
    
    </Col>


  </Row>



  <Row >

  <Col  >
    <Card  className="cards"style={{ width: '18rem' }}>
  <Card.Img variant="top" src={hunza} />
  <Card.Body>
    <Card.Title>Hunza Valley  </Card.Title>
    <Card.Text>
      Lorem Ipsum  
    </Card.Text>
    <Link to="/login"><Button variant="primary">Let's Go </Button></Link>
  </Card.Body>
</Card></Col>


    <Col >
    <Card  className="cards"style={{ width: '18rem' }}>
  <Card.Img variant="top" src={hunza} />
  <Card.Body>
    <Card.Title>Hunza Valley  </Card.Title>
    <Card.Text>
      Lorem Ipsum  
    </Card.Text>
    <Link to="/login"><Button variant="primary">Let's Go </Button></Link>
  </Card.Body>
</Card>
    
    </Col>


    <Col >    <Card  className="cards"style={{ width: '18rem' }}>
  <Card.Img variant="top" src={hunza} />
  <Card.Body>
    <Card.Title>Hunza Valley  </Card.Title>
    <Card.Text>
      Lorem Ipsum  
    </Card.Text>
    <Link to="/login"><Button variant="primary">Let's Go </Button></Link>
  </Card.Body>
</Card></Col>
  </Row>
</Container>




<div className="text-center p-3 text-white" >
      © 2021 Copyright: Trips n Tour      
    </div>
</div>
</>
    )
}
export default Cards;
