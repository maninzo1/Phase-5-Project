import React from 'react';
// import {Link } from 'react';
// import {useParams} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
function MyMeds({myMeds, removeMedFromList}) {
    // const {id} = useParams().id

console.log(myMeds);



   const medCards = myMeds.map(userMed => {
       return (
           
    <Card style={{ width: '20rem' }}>
        <Card.Title>You are currently taking:</Card.Title>     
        <Card.Img variant="top" src={userMed.medication.image} alt={userMed.medication.name}/> 
        <Card.Body>
        <Card.Text>Name: {userMed.medication.name}</Card.Text>
       
        <Button variant="danger" className='remove-med' onClick={() => removeMedFromList(userMed.medication.id)}>Remove from List</Button>
    </Card.Body>
    </Card>

   )
})  



    
// {myMeds.map(myMed => {
    return (
     <>
     {medCards}
     </>
      
    )
}  
// )}
// }
export default MyMeds;

 