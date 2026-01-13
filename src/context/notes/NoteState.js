import React, { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = ({ children }) => {
  const host = "http://localhost:5000"
  const notesInitial = [
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
      "_id": "695e8f99cbf48543c7ae552ba",
      "user": "695d388b7b2248e5e74ff6f2",
      "title": "My title",
      "description": "Please Wake up Early",
      "tag": "personal",
      "date": "2026-01-07T16:53:45.879Z",
      "__v": 0
    },
    {
      "_id": "695faaef6fdfe3271d047744e",
      "user": "695d388b7b2248e5e74ff6f2",
      "title": "My title",
      "description": "Please Wake up Early",
      "tag": "personal",
      "date": "2026-01-08T13:02:39.364Z",
      "__v": 0
    },
    {
      "_id": "695e8f99cbf4843cg7ae552ba",
      "user": "695d388b7b2248e5e74ff6f2",
      "title": "My title",
      "description": "Please Wake up Early",
      "tag": "personal",
      "date": "2026-01-07T16:53:45.879Z",
      "__v": 0
    },
    {
      "_id": "695faaef6dfe3j271d047744e",
      "user": "695d388b7b2248e5e74ff6f2",
      "title": "My title",
      "description": "Please Wake up Early",
      "tag": "personal",
      "date": "2026-01-08T13:02:39.364Z",
      "__v": 0
    },
    {
      "_id": "695e8f599cbf4843c7ae552ba",
      "user": "695d388b7b2248e5e74ff6f2",
      "title": "My title",
      "description": "Please Wake up Early",
      "tag": "personal",
      "date": "2026-01-07T16:53:45.879Z",
      "__v": 0
    },
    {
      "_id": "695faaef6dfe3271d9047744e",
      "user": "695d388b7b2248e5e74ff6f2",
      "title": "My title",
      "description": "Please Wake up Early",
      "tag": "personal",
      "date": "2026-01-08T13:02:39.364Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(notesInitial);
  // Add a Note

  const addNote = async (title, description, tag) => {
    //TODO API CALL
     //API Call
    const response = await fetch(`${host}/api/notes/addnotes`, {
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
    const json = response.json();

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
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  )
}


export default NoteState;