import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState=({children})=> {
   const notesInitial =[
  {
    "_id": "695e8f99cbf4843c7ae552ba",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-07T16:53:45.879Z",
    "__v": 0
  },
  {
    "_id": "695faaef6dfe3271d047744e",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-08T13:02:39.364Z",
    "__v": 0
  },
  {
    "_id": "695e8f99cbf4843c7ae552ba",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-07T16:53:45.879Z",
    "__v": 0
  },
  {
    "_id": "695faaef6dfe3271d047744e",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-08T13:02:39.364Z",
    "__v": 0
  },
  {
    "_id": "695e8f99cbf4843c7ae552ba",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-07T16:53:45.879Z",
    "__v": 0
  },
  {
    "_id": "695faaef6dfe3271d047744e",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-08T13:02:39.364Z",
    "__v": 0
  },
  {
    "_id": "695e8f99cbf4843c7ae552ba",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-07T16:53:45.879Z",
    "__v": 0
  },
  {
    "_id": "695faaef6dfe3271d047744e",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title",
    "description": "Please Wake up Early",
    "tag": "personal",
    "date": "2026-01-08T13:02:39.364Z",
    "__v": 0
  }
]

const [notes , setNotes]= useState(notesInitial);
  // Add a Note
  
  const addNote = (title,description,tag)=>{
    //TODO API CALL
    console.log("Adding a new note")
    const note = {
    "_id": "695faaef6dfe3271d047744e",
    "user": "695d388b7b2248e5e74ff6f2",
    "title": "My title (Added)",
    "description": "Please Wake up Early [Added]",
    "tag": "personal",
    "date": "2026-01-08T13:02:39.364Z",
    "__v": 0
  };
    setNotes(notes.concat(note))
  }
  
  //Delete a Note
  const deleteNote = ()=>{

  }

  //Edit a Note
    const editNote = ()=>{

  }
    return (
        <NoteContext.Provider  value = {{notes, addNote, deleteNote, editNote}}>
            {children}
        </NoteContext.Provider>
    )
}


export default NoteState;