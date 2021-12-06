import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./NavBar";
import Search from "./Search";
import MedList from "./MedList";
import MedDetail from "./MedDetail";
import MyMeds from "./MyMeds";
// import UserMeds from "./UserMeds";


function App() {
const [medications, setMedications] = useState([]);
const [myMeds, setMyMeds] = useState([]);
// const [takenMeds, setTakenMeds] = useState([])
const [search, setSearch] = useState("")
// const [userMeds, setUserMeds] = useState([])

useEffect(() => {
  fetch(`/user_medications`)
      .then(res => res.json())
      .then(myMeds => setMyMeds(myMeds))

  fetch("/medications")
  .then((r) => r.json())
  .then((medArray) => setMedications(medArray));
  
  // fetch("/takens")
  // .then((r) => r.json())
  // .then((userTakenMeds) => setTakenMeds(userTakenMeds));

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

  

const updateMed = (updatedMed) => {
  const updatedArray = medications.map((oldMed) => {
      if(updatedMed.id === oldMed) {
          return {...updatedMed}
      } else {
          return oldMed
      
      }
  })

  setMedications(updatedArray)
}

const deleteMed = (deletedMed) => {
  const newArray = medications.filter((oldMed) => oldMed.id !== deletedMed.id)
  setMedications(newArray)
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
            <Search setSearch={setSearch} medications={filteredMeds}/>
            <MedList medications={filteredMeds} setMedications={setMedications} addMedToList={addMedToList} removeMedFromList={removeMedFromList} updateMed={updateMed} deleteMed={deleteMed} />
          </Route>

          <Route path="/medications/:id">
            <MedDetail medications={medications}/>
          </Route>
          <Route path="/user_medications">
          <MyMeds myMeds={myMeds} addMedToList={addMedToList} removeMedFromList={removeMedFromList}/>
          </Route>
          {/* <Route path="/user_medications/">
          {userMeds.map(userMed => <UserMeds key={userMed.dose} userMed={userMed}/>)}
          </Route> */}
          
          {/* <Route path="/medications">
            <MedList medications={filteredMeds} updateMed={updateMed} deleteMed={deleteMed} />
          </Route> */}
         
      </Switch>    
  
  </div> 
  
  );
}

export default App;


// <BrowserRouter>
// <div className="App">
//   <Switch>
//     <Route path="/testing">
//       <h1>Test Route</h1>
//     </Route>
//     <Route path="/">
//       <h1>Page Count: {count}</h1>
//     </Route>
//   </Switch>
// </div>
// </BrowserRouter>