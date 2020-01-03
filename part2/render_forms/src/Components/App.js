import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
import Phonebook from "./PhoneBook";
import noteService from '../services/notes.js'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() =>{
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(note => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(note => note.id !== id))
    })
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
    />
  )

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5
    };

    noteService.create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    });
  };

  return (
    <>
    <h3>Notes Application</h3>
      <button onClick={addNote}>Add Note</button>
      <div>{rows()}</div>
      <Phonebook />
    </>
  );
};

export default App;
