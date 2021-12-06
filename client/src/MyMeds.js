import {useState} from 'react';
// import {Link } from 'react';
// import {useParams} from 'react-router-dom'
import {Button, Card, Form, Stack} from 'react-bootstrap'
function MyMeds({myMeds, removeMedFromList}) {
    // const {id} = useParams().id
    const [newNote, setNewNote] = useState("")
    const [visible, setVisible] = useState("")
    
console.log(myMeds);

const medCards = myMeds.map(userMed => {
   
    
       return (
           
    <Card key={userMed.id} style={{ width: '20rem' }}>
        <Card.Title>You are currently taking:</Card.Title> 
        <Card.Img variant="top" src={userMed.medication.image} alt={userMed.medication.name}/> 
        <Card.Body>
        <Card.Text>Name: {userMed.medication.name}</Card.Text>
        {/* <Card.Text>My Notes:</Card.Text> */}
        <Stack gap={2} className="col-md-5 mx-auto">
        <Button variant="primary" className='add-comment' onClick={() => setVisible(!visible)}>Add Notes</Button>
        { visible ? <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={(e) => setNewNote(e.target.value)}  as='textarea' rows={3} placeholder="Type your note..."value={newNote} type="text" name="note" />
            </Form.Group>
            </Form>: null}
        <Button variant="danger" className='remove-med' onClick={() => removeMedFromList(userMed.medication.id)}>Remove</Button>
        </Stack>
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





 