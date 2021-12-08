import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {Card, Row} from 'react-bootstrap'
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
        <Row className="justify-content-md-center">
        <Card style={{ width: '25rem' }}>
        <Card.Body>
        {/* <div className="med-Detail"> */}
            <Card.Img variant="top"src={med.image} alt={med.name}/>
            <Card.Title>{med.name}</Card.Title>
            <Card.Text>{med.description}</Card.Text>
            <Card.Text>Frequency: {med.frequency}</Card.Text>
       {/* </div>  */}
       </Card.Body>
       </Card>
       </Row>
    ); 
}
export default MedDetail;


// {medications.filter((med) => med.id === id).map((med) => (
//     <div className="full-card" key={med.id}>
//         <h2>Name: {med.name}</h2>
//         <h4>{med.description}</h4>
//         </div>
// ))}