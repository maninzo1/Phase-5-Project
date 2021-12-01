import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import MedPage from "./MedPage";
import NavBar from "./NavBar";
import Search from "./Search";
import MedList from "./MedList";
import MedDetail from "./MedDetail";
// import UserMeds from "./UserMeds";


function App() {
const [medications, setMedications] = useState([]);
const [search, setSearch] = useState("")
// const [userMeds, setUserMeds] = useState([])

useEffect(() => {
  fetch("/medications")
  .then((r) => r.json())
  .then((medArray) => setMedications(medArray));
  
  // fetch("/user_medications")
  // .then((r) => r.json())
  // .then((userMedsArr) => setUserMeds(userMedsArr));

  }, []);


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

const filteredMeds = medications.filter((medObj) => medObj.name.toLowerCase().includes(search.toLowerCase()))


  return(
  <div className="app">   
  <NavBar/> 
    
      <Switch> 
        
          <Route exact path="/">
            <Search setSearch={setSearch} medications={filteredMeds}/>
            <MedList medications={filteredMeds} updateMed={updateMed} deleteMed={deleteMed} />
          </Route>

          <Route path="/medications/:id">
            <MedDetail medications={medications}/>
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