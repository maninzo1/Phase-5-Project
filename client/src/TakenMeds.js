// import {useState, useEffect} from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap'
import Moment from 'react-moment';

function TakenMeds({takenMeds}) {

    const takenMedCard = takenMeds.map(takenMed => {
        
        console.log(takenMed.userMedInfo.name)


    return (
        <Container>  
            <Row  xs={2} xs={2}className="justify-content-md-center">       
            <Col >
            <Card key={takenMed.id} style={{ width: '15rem' }}>
            <Card.Body>
            <Card.Text>You took {takenMed.userMedInfo.name} on <Moment >{takenMed.created_at}</Moment></Card.Text>
            <Card.Img variant="top" src={takenMed.userMedInfo.image} alt={takenMed.userMedInfo.name}/>
            </Card.Body>
            </Card>
            </Col>
            </Row>       
        </Container>
 
        )}
    );

    return (
        <>
        {takenMedCard}
        </>
    )
}


export default TakenMeds;
