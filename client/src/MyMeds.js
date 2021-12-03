import React from 'react';
import {Link } from 'react';
// import {useParams} from 'react-router-dom'

function MyMeds({myMeds, removeMedFromList}) {
    // const {id} = useParams().id

console.log(myMeds);



   const medCards = myMeds.map(userMed => {
       return (
           
    <div className="med-Detail"> 
      <h2>You are currently taking:</h2>     
    <img src={userMed.medication.image} alt={userMed.medication.name}/> 
   
   <h3>Name: {userMed.medication.name}</h3>
       
   <button className='remove-med' onClick={() => removeMedFromList(userMed.medication.id)}>Remove from List</button>
    </div>

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

 