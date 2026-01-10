
import NoteContext from '../context/notes/NoteContext';
import React, { useContext } from 'react'
import NoteItem from './NoteItem';

const Notes = () => {
     const context = useContext(NoteContext);
      const {notes, setNotes} = context;
  return (
    <div className="row my-3">
        <h2> Your Notes</h2>
            {notes && notes.map((note)=>{
                return <NoteItem key={note._id} note={note}/>
})}
        
      </div>
  )
}

export default Notes
