import React from 'react';
import { Button, Container } from 'react-bootstrap';
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
      <Container>
        <div className="cards-container">{medications.map(medication => (
          <div className="cards" > 
        <p ><Link to={`medications/${medication.id}`}>
          <img src={medication.image} alt={medication.name}/></Link> </p>
        <p ><Link to={`medications/${medication.id}`}>{medication.name}</Link></p>
        <p>{addOrRemoveButton(medication)}</p>
        </div>
        )
       
          )} 
        
        </div>
      </Container>  
        )
}



export default MedList;


