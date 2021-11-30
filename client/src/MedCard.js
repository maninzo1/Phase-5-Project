import { useState } from 'react';


function MedCard({medication, updateMed, deleteMed, setSelectedMed}) {
const {name, description, frequency, image, id} = medication;

const [newDose, setNewDose] = useState("")
const [visible, setVisible] = useState("")

const handleUpdate = (e) => {
    e.preventDefault();

    fetch('/user_medications/'+id, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({dose: newDose})

    })
    .then(r => r.json())
    .then(updatedMed => updateMed(updatedMed))
}

    const handleDelete = () => {
        fetch('/user_medications/'+id, {method:"DELETE"})
        .then(() => deleteMed(medication))
    }
    return (
        <li onClick={() => setSelectedMed(medication)} className="card">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Frequency: {frequency}</p>
            <button onClick={() => setVisible(!visible)} className="update">UPDATE</button>
            { visible ? <form onSubmit={handleUpdate}>
                Dose: <input onChange={(e) => setNewDose(e.target.value)} value={newDose} type="text" placeholder="Dose" name="dose" />
            </form>: null}
            <button onClick={handleDelete} className="delete">DELETE</button>
        </li>

    );
}

export default MedCard;
