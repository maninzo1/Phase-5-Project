import {useState} from 'react';
// import {Link } from 'react';
// import {useParams} from 'react-router-dom'
import {Button, Card, Col, Container, Form, Row, Stack} from 'react-bootstrap';
// import TakenMeds from './TakenMeds';
import Notes from './Notes'
import Logs from './Logs'

function MyMeds({userMed, setMyMeds, removeMedFromList, medNotes, setMedNotes, addTakenMed, setTakenMeds, takenMeds}) {
    const [toggleNotes, setToggleNotes] = useState(false)
    const [toggleLog, setToggleLog] = useState(false)
    const [noteFormData, setNoteFormData] = useState({content: ''})

    function handleToggleNotes(){
        setToggleNotes(toggle => !toggle)
    }

    
    function handleToggleLogs(){
        setToggleLog(toggle => !toggle)
    }

    function handleNoteChange(event) {
        setNoteFormData({
            ...noteFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleNoteSubmit(event) {
        event.preventDefault()
        console.log(noteFormData)
        
        const obj = {
            "content": noteFormData.content,
            "user_medication_id": userMed.id
        }

        setNoteFormData({content: ''})

        fetch('/medication_notes', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(resp => resp.json()).then(userMedNote => {
            setMedNotes(medNotes => [
                ...medNotes,
                userMedNote])
               
            fetch(`/user_medications`)
            .then(resp => resp.json())
            .then(userMedNotes => setMyMeds(userMedNotes))

        })
    }


    const filterMedNotes = medNotes.filter(medNote =>  medNote.user_medication_id === userMed.id )

    const filterTakenMeds = takenMeds.filter(takenMed =>  takenMed.user_medication_id === userMed.id )
    
    

// const medCards = myMeds.map(userMed => {
// console.log(userMed.id)
    
       return (
    <Container>  
        <Row >       
        <Col>
        <Card key={userMed.id} style={{ width: '18rem' }}>
        <Card.Title>You are currently taking {userMed.medication.name}</Card.Title> 
        <Card.Img variant="top" src={userMed.medication.image} alt={userMed.medication.name}/> 
        <Card.Body>
        {/* <Card.Text>Name: {userMed.medication.name}</Card.Text> */}
        {/* <Card.Text>My Notes:</Card.Text> */}
        <Stack gap={3} className="col-md-8 mx-auto">
        <Button variant="success" className='remove-med' onClick={()=> addTakenMed(userMed.id)}>Taken</Button>
        {/* <Button variant="primary" className='add-comment' onClick={() => setVisible(!visible)}>Add Notes</Button> */}
        <Button variant="danger" className='remove-med' onClick={() => removeMedFromList(userMed.medication.id)}>Remove</Button>
        <Form onSubmit={handleNoteSubmit}>
            <Form.Group className="mb-3" controlId="formMedNote">
            <Form.Control onChange={handleNoteChange} as='textarea' rows={1} placeholder="Type your note..." name="content" value={noteFormData.content} type="text"/>
            </Form.Group>
            <Stack gap={1} className="col-md-8 mx-auto">
            <Button variant="primary" type="submit" size="sm">
              Add Note
            </Button>
            </Stack>
        </Form>
        </Stack>
        <Button variant="outline-dark" size="sm" onClick={handleToggleNotes}> {toggleNotes ? "Hide Notes" : "View Notes"}</Button>
        <Button variant="outline-dark" size="sm" onClick={handleToggleLogs}>{toggleLog ? "Hide Logs" : "View Logs" }</Button>
         {toggleNotes ? <Notes medNotes={filterMedNotes}/> : null}
         {toggleLog ? <Logs takenMeds={filterTakenMeds}/> : null}
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
