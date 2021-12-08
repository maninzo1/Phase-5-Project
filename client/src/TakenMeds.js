// import {useState, useEffect} from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap'
import Moment from 'react-moment';

function TakenMeds({takenMeds}) {

    const takenMedCard = takenMeds.map(takenMed => {
       



    return (
        <Container>  
            <Row  xs= "auto" className="justify-content-md-center">       
            <Col  xs= "auto">
            <Card key={takenMed.id} style={{ width: '15rem' }}>
            <Card.Body>
            <Card.Text>You took {takenMed.userMedInfo.name} on <Moment >{takenMed.created_at}</Moment></Card.Text>
            <Card.Img variant="top" src={takenMed.userMedInfo.image} alt={takenMed.userMedInfo.name}/>
            {/* <Card.Text>Note: {medNoteCard.content}</Card.Text> */}
            </Card.Body>
            </Card>
            </Col>
            </Row>       
        </Container>
    
        )}
    );

    return (
        <Container>
        <Row xs= "auto" className="justify-content-md-center"> 
        {takenMedCard}
        </Row>
        </Container>
        
    )
}


export default TakenMeds;
