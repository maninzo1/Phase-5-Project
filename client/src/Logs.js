import React from 'react';
import Moment from "react-moment" ;

function Logs({takenMeds}) {

    return (
     <ul>
         {takenMeds.map(takenMed => <li><Moment >{takenMed.created_at}</Moment></li>)}
     </ul>
    );
}

export default Logs;
