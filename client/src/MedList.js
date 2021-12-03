import React from 'react';
// import MedCard from './MedCard';
import { Link } from 'react-router-dom'

function MedList({medications, removeMedFromList, addMedToList, updateMed, deleteMed, setSelectedMed}) {


    const addOrRemoveButton = (medication) => {
        if (medication.onList) {
          return <button onClick={() => removeMedFromList(medication.id)}>Remove from Med List</button>
        } else {
          return <button onClick={() => addMedToList(medication.id)}>Add to Med List</button>
        }}

        console.log(medications);
   
    return (
        <div className="cards">{medications.map(medication => ( 
        <h4 ><Link to={`medications/${medication.id}`} >
          <img src={medication.image} alt={medication.name}/> {medication.name}</Link> {addOrRemoveButton(medication)}
        </h4>)
          )} 
        </div>
        )
}



export default MedList;


