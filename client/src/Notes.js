function Notes({medNotes}){
    
    return(
        <ul>
            {medNotes.map(note => <li>Note: {note.content}</li>)}
        </ul>
    )
}

export default Notes;