// client/src/components/App.js
// import { useState, useEffect } from "react";
import {BrowserRouter as Route, Switch } from "react-router-dom";
import MedPage from "./MedPage";
import NavBar from "./NavBar";


function App() {
  return(
  <div className="app">   
    <NavBar/>   
     <Switch>
      <Route path="/">
        <MedPage/>
      </Route>
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