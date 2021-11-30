import React from 'react';

function MedDetail({selectedMed}) {
    return (
        <div className="medDetail">
            <img src={selectedMed.image} alt={selectedMed.name}/>
            <h4>{selectedMed.name}</h4>
            <p>{selectedMed.description}</p>
            <p>Frequency: {selectedMed.description}</p>
        </div>
    );
}

export default MedDetail;
