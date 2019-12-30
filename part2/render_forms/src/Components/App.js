import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important: !note.important}

    axios.put(url, changedNote).then(res => {
      setNotes(notes.map(note => note.id !== id ? note : res.data))
    })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const rows = () => notesToShow.map(note => {
    <Note
    key={note.id}
    note={note}
    toggleImportance={()=> toggleImportanceOf(note.id)} />
  })

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }
  
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('Hello World...')
      })
  }

  return (
    <>
    <button onClick={addNote}>Add Note</button>
    <li>{rows()}</li>
    </>
  )
}

export default App;