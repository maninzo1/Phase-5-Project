import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import NavBar from "./NavBar";
import Search from "./Search";
import MedList from "./MedList";
import MedDetail from "./MedDetail";
import MyMeds from "./MyMeds";
import TakenMeds from "./TakenMeds";
// import UserMeds from "./UserMeds";


function App() {
const [medications, setMedications] = useState([]);
const [myMeds, setMyMeds] = useState([]);
const [takenMeds, setTakenMeds] = useState([])
const [search, setSearch] = useState("")
const [medNotes, setMedNotes] = useState([])

useEffect(() => {
  fetch(`/user_medications`)
      .then(res => res.json())
      .then(myMeds => setMyMeds(myMeds))

  fetch("/medications")
  .then((r) => r.json())
  .then((medArray) => setMedications(medArray));
  
  fetch("/takens")
  .then((r) => r.json())
  .then((userTakenMeds) => setTakenMeds(userTakenMeds));

  fetch('/medication_notes')
  .then(r => r.json())
  .then(userMedNotes => setMedNotes(userMedNotes) )

  }, []);

  

  const removeMedFromList = (medicationId) => {

    let userMedId = myMeds.find(myMed => myMed.medication.id === medicationId).id
    
    return fetch(`/user_medications/${userMedId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log("SUCCESS");
          const updatedMeds = myMeds.filter(userMedication => userMedication.id !== userMedId) 
          setMyMeds(updatedMeds)
        }
      })
  }

  const addMedToList = (medicationId) => {
    return fetch('/user_medications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        medication_id: medicationId
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userMed => {
        setMyMeds(myMeds => [...myMeds, userMed])
      })
  }

  const addTakenMed = (userMedId) => {
    return fetch('/takens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_medication_id: userMedId
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(userTakenMed => {
        setTakenMeds(takenMeds => [...takenMeds, userTakenMed])
      })
  }


  
  const isMedInList = medications.map(med => {
  if (myMeds.find(myMed => myMed.medication.id === med.id)) {
    return {...med, onList: true}
  } else {
    return {...med, onList: false}
  } 
})

const filteredMeds = isMedInList.filter((medObj) => medObj.name.toLowerCase().includes(search.toLowerCase()))



return(
  <div className="app">   
  <NavBar/> 
    
      <Switch> 
        
          <Route exact path="/">
          <Container className="search-bar">
          <Col>
          <Search setSearch={setSearch} medications={filteredMeds}/>
          </Col>
          </Container>
            <MedList medications={filteredMeds} setMedications={setMedications} addMedToList={addMedToList} removeMedFromList={removeMedFromList} />
          </Route>

          <Route path="/medications/:id">
            <MedDetail medications={medications}/>
          </Route>
          <Route path="/user_medications">
            <Row xs={3} md={3} className="g-4"> {myMeds.map(userMed => <MyMeds key={userMed.id} userMed={userMed} addMedToList={addMedToList} removeMedFromList={removeMedFromList} addTakenMed={addTakenMed} takenMeds={takenMeds} setMedNotes={setMedNotes} medNotes={medNotes} setMyMeds={setMyMeds}/>)}</Row>
          </Route>

          <Route path="/takens/">
            <TakenMeds takenMeds={takenMeds} setTakenMeds={setTakenMeds} />
          </Route>
          
          {/* <Route path="/medications">
            <MedList medications={filteredMeds} updateMed={updateMed} deleteMed={deleteMed} />
          </Route> */}
         
      </Switch>    
  
  </div> 
  
  );
}

export default App;







//   const addNewNote = (newUserMedNote) =>{
//     setmedNote((prevArray) => [...prevArray, newUserMedNote])
// }


// const updateMed = (updatedMed) => {
//   const updatedArray = medications.map((oldMed) => {
//       if(updatedMed.id === oldMed) {
//           return {...updatedMed}
//       } else {
//           return oldMed
      
//       }
//   })

//   setMedications(updatedArray)
// }

// const deleteMed = (deletedMed) => {
//   const newArray = medications.filter((oldMed) => oldMed.id !== deletedMed.id)
//   setMedications(newArray)
// }
// </BrowserRouter>