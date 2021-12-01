import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'

function MedDetail( ) {
    // const {id} =useParams();
    const [med, setMed] = useState("null");
    const [isLoaded, setIsLoaded] =useState(false);
    const id = useParams().id;
    useEffect(() => {
        fetch(`/medications/${id}`)
        .then((r) => r.json())
        .then(med => {
            setMed(med)
            setIsLoaded(true);
        });
    },[]);

    if (!isLoaded) return <h2>Loading...</h2>;
    
    return (
        <div className="med-Detail">
        
            <img src={med.image} alt={med.name}/>
            <h4>{med.name}</h4>
            <p>{med.description}</p>
            <p>Frequency: {med.frequency}</p>

       </div> 
    );
}

export default MedDetail;


// {medications.filter((med) => med.id === id).map((med) => (
//     <div className="full-card" key={med.id}>
//         <h2>Name: {med.name}</h2>
//         <h4>{med.description}</h4>
//         </div>
// ))}