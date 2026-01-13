import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = ( props ) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

     // Get all  Note

  const getNotes = async () => {
    //TODO API CALL
     //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZDM4OGI3YjIyNDhlNWU3NGZmNmYyIn0sImlhdCI6MTc2NzcxNzAwM30.XL_7VvlmflOy8ZNGWI2ztHdasoTgB5PJq7FI10qjYYs"
      },
     
    });
   const json = await response.json();
   console.log(json);
   setNotes(json);
  };
   

  // Add a Note
  const addNote = async (title, description, tag) => {
    //TODO API CALL
     //API Call
     await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZDM4OGI3YjIyNDhlNWU3NGZmNmYyIn0sImlhdCI6MTc2NzcxNzAwM30.XL_7VvlmflOy8ZNGWI2ztHdasoTgB5PJq7FI10qjYYs"
      },
      body: JSON.stringify({ title, description, tag }),

    });
   
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
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjk1ZDM4OGI3YjIyNDhlNWU3NGZmNmYyIn0sImlhdCI6MTc2NzcxNzAwM30.XL_7VvlmflOy8ZNGWI2ztHdasoTgB5PJq7FI10qjYYs"
      },
      body: JSON.stringify({ username: "example" }),

    });
    await response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {

      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;