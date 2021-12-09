import React from 'react';
import { Button, Card, Container, Image, Row, Stack } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
function MedList({medications, removeMedFromList, addMedToList, updateMed, deleteMed, setSelectedMed}) {

    const addOrRemoveButton = (medication) => {
        if (medication.onList) {
          return <Button variant="secondary" onClick={() => removeMedFromList(medication.id)}>Remove from Med List</Button>
        } else {
          return <Button variant="primary" onClick={() => addMedToList(medication.id)}>Add to Med List</Button>
        }}
        // console.log(medications);
   
    return (
      <Container >
      {/* <Card> */}
      <Row xs={3} md={3} className="g-4">{medications.map(medication => (
          <div className="cards" > 
        <Card.Link href ={`medications/${medication.id}`} >
          <Image src={medication.image} alt={medication.name} width="275px"/></Card.Link>
          <Stack >
        <h6><Card.Link href={`medications/${medication.id}` } text="dark" style={{textDecoration: 'none'}}>{medication.name}</Card.Link></h6>
        <p>{addOrRemoveButton(medication)}</p>
        </Stack>
        </div>
    
        )
       
          )} 
        
 
      
        </Row>
       {/* </Card> */}
      </Container>  
        )
}


export default MedList;

