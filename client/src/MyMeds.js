import {useState} from 'react';
// import {Link } from 'react';
// import {useParams} from 'react-router-dom'
import {Button, Card, Col, Container, Form, Row, Stack} from 'react-bootstrap';
// import TakenMeds from './TakenMeds';

function MyMeds({userMed, setMyMeds, removeMedFromList, medNotes, setMedNotes, addTakenMed, setTakenMeds}) {
    const [visible, setVisible] = useState(false)
    const [noteFormData, setNoteFormData] = useState({content: ''})


    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleNoteSubmit(event) {
        event.preventDefault()
        setNoteFormData({content: ''})
        const obj = {
            "content": event.target[0].value,
            "user_medication_id": userMed.id
        }

        fetch('/medication_notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(userMedNotes => {
            setMedNotes(medNotes => [
                ...medNotes,
                userMedNotes])
               
            fetch(`/user_medications`)
            .then(resp => resp.json())
            .then(userMedNotes => setMyMeds(userMedNotes))

        })
    }
    

// console.log(userMed)

// const medCards = myMeds.map(userMed => {
// console.log(userMed.id)
    
       return (
    <Container>  
        <Row>       
        <Col>
        <Card key={userMed.id} style={{ width: '20rem' }}>
        <Card.Title>You are currently taking:</Card.Title> 
        <Card.Img variant="top" src={userMed.medication.image} alt={userMed.medication.name}/> 
        <Card.Body>
        <Card.Text>Name: {userMed.medication.name}</Card.Text>
        {/* <Card.Text>My Notes:</Card.Text> */}
        <Stack gap={3} className="col-md-5 mx-auto">
        <Button variant="success" className='remove-med' onClick={()=> addTakenMed(userMed.id)}>Taken</Button>
        <Button variant="primary" className='add-comment' onClick={() => setVisible(!visible)}>Add Notes</Button>
        { visible ? <Form onSubmit={handleNoteSubmit}>
            <Form.Group className="mb-3" controlId="formMedNote">
            <Form.Control onChange={handleNoteChange} as='textarea' rows={3} placeholder="Type your note..." name="content" value={noteFormData.content} type="text"/>
            </Form.Group>
            </Form>: null}
        <Button variant="danger" className='remove-med' onClick={() => removeMedFromList(userMed.medication.id)}>Remove</Button>
        </Stack>
        </Card.Body>
        </Card>
        </Col>
        </Row>
    </Container>
   )
  
 
// {myMeds.map(myMed => {
    // return (
    //  <>
    //  {medCards}
    //  </>
      
    // )
}  
// )}
// }
export default MyMeds;
