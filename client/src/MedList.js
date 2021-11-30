import React from 'react';
import MedCard from './MedCard';

function MedList({medications, updateMed, deleteMed, setSelectedMed}) {


    return (
        <ul className="cards">{medications.map(medication => <MedCard key={medication.id} medication={medication} updateMed={updateMed} deleteMed={deleteMed} setSelectedMed={setSelectedMed}/>)}</ul>
    );
}

export default MedList;
