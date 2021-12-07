function Notes({medNotes}){
    
    return(
        <ul>
            {medNotes.map(note => <li>{note.content}</li>)}
        </ul>
    )
}

export default Notes;