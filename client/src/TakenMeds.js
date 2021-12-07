// import {useState, useEffect} from 'react';
// import {Card, Row} from 'react-bootstrap'

function TakenMeds({takenMeds}) {

    const takenMedCard = takenMeds.map(takenMed => {
        
        console.log(takenMed.userMedInfo.name)


    return (
        <>
        <img src={takenMed.userMedInfo.image} alt={takenMed.userMedInfo.name}/>
        <h3 key={takenMed.id}>Name: {takenMed.userMedInfo.name}</h3>
        </>
    // {/* //    <Row xs={4} md={4} className="g-4">
    // //    <Card style={{ width: '25rem' }}>
    // //    <Card.Body>
    // //    <div className="med-Detail">
    // //        <Card.Img variant="top"src={takenMed.image} alt={takenMed.medication.name}/>
    // //        <Card.Title>{takenMed.medication.name}</Card.Title>
    // //        <Card.Text>{takenMed.medication.description}</Card.Text>
    // //        <Card.Text>Frequency: {takenMed.medication.frequency}</Card.Text>
    // //   </div> 
    // //   </Card.Body>
    // //   </Card>
    // //   </Row> */}
    )}
    );

    return (
        <>
        {takenMedCard}
        </>
    )
}


export default TakenMeds;
