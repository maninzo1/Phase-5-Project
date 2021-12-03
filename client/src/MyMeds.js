import React from 'react';
import {useState, useEffect } from 'react';
// import {useParams} from 'react-router-dom'

function MyMeds() {
    const [medication, setMedication] = useState([]);
    // const {id} = useParams().id
    useEffect(() => {
      fetch(`/user_medications`)
          .then(res => res.json())
          .then(medication => setMedication(medication))
          }, [])
    // const fetchMedCallback = useCallback(() => {
    //     fetch(`/user_medications/${id}`, {
        
    //     })
    //       .then(res => res.json())
    //       .then(medication => setMedication(medication))
    //   }, [id])
      
    //   useEffect(() => {
    //     fetchMedCallback()
    //   }, [fetchMedCallback])
    
    //   const addOrRemoveButton = (medication) => {
    //     if (medication.user_medication) {
    //       return (
    //         <>
    //           <button
    //             onClick={() => removeMedFromList(medication.id).then(() => fetchMedCallback())}
    //           >
    //             Remove from Med List
    //           </button>
    //         </>
    //        )
    //     } else {
    //       return (
    //         <button
    //           onClick={() => addMedToList(medication.id).then(() => fetchMedCallback())}
    //         >
    //           Add to Med List
    //         </button>
    //       )
    //     }
    //   }
    //       if(!medication){ return <div></div>}

    return (
        <div className="med-Detail">
        <h2>You are currently taking:</h2>    
        <img src={medication.image} alt={medication.name}/> 
       <h3>{medication.name}</h3>
       {/* <p>{addOrRemoveButton(medication)}</p> */}
       <p>Description: {medication.description}</p>
       <p>Frequency: {medication.frequency}</p>
        </div>
    )
    
}

export default MyMeds;
