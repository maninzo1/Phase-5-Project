// function MedCard(){
    
        
// const [commentFormData, setCommentFormData] = useState({content: ''})

// function handleCommentChange(event) {
//     setCommentFormData({
//         ...commentFormData,
//         [event.target.name]: event.target.value
//     })
// }

// function handleCommentSubmit(plant_id, gardenId, event) {
//     event.preventDefault()
//     setCommentFormData({content: ''})
//     const obj = {
//         "content": event.target[0].value, 
//         "user_medication_id": user_medication_id,
        
//     }

//     fetch(`/medication_notes`, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(obj)
//     }).then((resp => {
//         if (resp.ok) {
//             fetch(`/user_medications`).then(resp => resp.json()).then(data => setMedNote(data))
//         } else {
//             console.log("error!")
//         }
//     }))
// }

// return(
// <>
// </>
//     );
// }





//  export default MedCard;


// const addNewNote = (newUserMedNote) =>{
//     setmedNote((prevArray) => [...prevArray, newUserMedNote])
// }


//  const handleSubmit =(e) => {
//      e.preventDefault();
//      const newMedNote = {content: content}
//  }

//  const options = {
//      headers: {"Content-Type":"application/json"},
//      method: "POST",
//      body: JSON.stringify(newMedNote)
//  }

//  fetch('/medication_notes', options)
//  .then(r => r.json())
//  .then(newMedNote => {
//      addNewNote(newMedNote)
//      setNewMedNote("")
//  })
//  }


