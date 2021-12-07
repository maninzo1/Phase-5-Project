// import {useState, useEffect} from 'react';
import {Card, Col, Container, Row } from 'react-bootstrap'

function TakenMeds({takenMeds}) {

    const takenMedCard = takenMeds.map(takenMed => {
        
        console.log(takenMed.userMedInfo.name)


    return (
        <Container>  
            <Row  xs={4} md={4} className="g-4">       
            <Col>
            <Card key={takenMed.id} style={{ width: '20rem' }}>
            <Card.Text>You took {takenMed.userMedInfo.name} today.</Card.Text>
            <Card.Img variant="top" src={takenMed.userMedInfo.image} alt={takenMed.userMedInfo.name}/>
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
