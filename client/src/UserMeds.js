// import {useState} from 'react';
// import {Form, Button, Row, Col} from 'react-bootstrap'
// import ListDetails from './ListDetails';


// // form state

// function NoteForm({
//     activeList,
//     currentUser,
//     notes,
//     setNotes,
//     detail,
//     setListDetails
// }) {

//     const [noteFormData, setNoteFormData] = useState({content: ''})


//     function handleNoteChange(event) {
//         setNoteFormData({
//             ...noteFormData,
//             [event.target.name]: event.target.value
//         })
//     }


//     function handleNoteSubmit(event) {
//         event.preventDefault()
//         setNoteFormData({content: ''})
//         const obj = {
//             "note_text": event.target[0].value,

//             "list_item_id": detail.id
//         }


//         fetch('/notes', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(obj)
//         }).then(resp => resp.json()).then(data => {
//             setNotes(value => value = [
//                 ...notes,
//                 data
//             ], console.log(data))
//             fetch(`/lists/${
//                 activeList.id
//             }`).then(resp => resp.json()).then(data => setListDetails(data))
//         })
//     }


//     return (
//         <>
//             <Form onSubmit={handleNoteSubmit}>
//                 <Row>
//                     <Col>
//                         <Form.Group className="mb-3" controlId="formBasicNoteText">
//                             <Form.Label></Form.Label>
//                             <Form.Control onChange={handleNoteChange}
//                                 name="note_text"
//                                 value={
//                                     noteFormData.note_text
//                                 }
//                                 placeholder="Make a note"/>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Button className="mt-4" variant="primary" type="submit">Add Note</Button>
//                     </Col>
//                 </Row>
//             </Form>


//         </>
//     )
// }