import React, { useState, useEffect } from "react";
import Note from "./Note";
import Phonebook from "./PhoneBook";
import noteService from '../services/notes.js'
import Notification from './Error'
import Footer from "../Components/Footer"
import '../index.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() =>{
    noteService
    .getAll()
    .then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  // Toggle the importance field in JSON when this button is clicked
  // We fetch the url with the provided id to the function
  // We then run a built-in JS function called notes.find
  // This iterates over the notes array and finds the note with the same id
  // note => note.id === id
  // The condition is to to find a note whose id is the same as the id provided above
  // Then we use a spread operator to iterate over the chosen node's properties
  // When we add values after the spread operator then the value of the important property of the new object will be set to the false of its previous set value
  // Then we use the update/PATCH method to update the Note with the id and the changedNote
  // The update function returns response.data
  // We use that data as returnedNote
  // and setNotes to first use the existing notes with a map function
  // The map function checks if the node received where note.id !== provided id
  // If it is false where note.id and the id provided are the same we set the Notes array with the returnedNote with the updatedID

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find(note => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(note => (note.id !== id ? note : returnedNote)));
    })
    .catch(error => {
      setErrorMessage(`Note ${note.content} was already removed from the server`)
      setTimeout(() =>{
        setErrorMessage(null)
      }, 5000)
      setNotes(notes.filter(note => note.id !== id))
    })
  };

  const notesToShow = showAll ? notes : notes.filter(note => note.important === 'true');

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
    <Notification message={errorMessage} />
      <button onClick={addNote}>Add Note</button>
      <div>{rows()}</div>
      <Footer />
    </>
  );
};

export default App;
