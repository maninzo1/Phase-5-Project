import React from 'react';

function Logs({takenMeds}) {
    return (
     <ul>
         {takenMeds.map(takenMed => <li>{takenMed.created_at}</li>)}
     </ul>
    );
}

export default Logs;
