import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function MedList({medications, removeMedFromList, addMedToList, updateMed, deleteMed, setSelectedMed}) {

    const addOrRemoveButton = (medication) => {
        if (medication.onList) {
          return <Button variant="secondary" onClick={() => removeMedFromList(medication.id)}>Remove from Med List</Button>
        } else {
          return <Button variant="primary" onClick={() => addMedToList(medication.id)}>Add to Med List</Button>
        }}
        console.log(medications);
   
    return (
      <Container >
      {/* <Card> */}
      <Row xs={4} md={4} className="g-4">{medications.map(medication => (
          <div className="cards" > 
        <p ><Link to={`medications/${medication.id}`}>
          <Image src={medication.image} alt={medication.name} width="275px"/></Link></p>
        <p><Link to={`medications/${medication.id}`}>{medication.name}</Link></p>
        <p>{addOrRemoveButton(medication)}</p>
        </div>
    
        )
       
          )} 
        
 
      
        </Row>
       {/* </Card> */}
      </Container>  
        )
}


export default MedList;

