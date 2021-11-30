import { useState, useEffect } from "react";
import Search from "./Search";
import MedList from "./MedList";
import MedDetail from "./MedDetail";

function MedPage() {
const [medications, setMedications] = useState([]);
const [search, setSearch] = useState("")
const [selectedMed, setSelectedMed] = useState(null)

    useEffect(() => {
        fetch("/medications")
        .then((r) => r.json())
        .then((medArray) => setMedications(medArray));
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

    // function handleSelectedMed (pill){
    //     setSelectedMed(pill)
    //     const filteredMedications = medications.filter(arrayMeds => arrayMeds !== pill)
    //     setMedications(filteredMedications)
    // }

     return (
        <main>
        <Search setSearch={setSearch}/>
       {selectedMed ? <MedDetail selectedMed={selectedMed}/> : null}
        <MedList medications={filteredMeds} updateMed={updateMed} deleteMed={deleteMed} setSelectedMed={setSelectedMed}/>
        </main>
    );
}

export default MedPage;
