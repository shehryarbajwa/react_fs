import React, {useState} from "react";
import ReactDOM from "react-dom";
import Note from "./Components/Note";
import Course from "./Components/Course";
import PhoneBook from "./Components/PhoneBook";
import axios from "axios";
import App from "./Components/App";


ReactDOM.render(<App />, document.getElementById('root'))

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17:30:31.098Z",
//     important: false
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2019-05-30T18:39:34.091Z",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2019-05-30T19:20:14.298Z",
//     important: true
//   }
// ];

// const courses = [
//     {
//       name: "Fundamentals of React",
//       exercises: 10,
//       id: 1
//     },
//     {
//       name: "Using props to pass data",
//       exercises: 7,
//       id: 2
//     },
//     {
//       name: "State of a component",
//       exercises: 14,
//       id: 3
//     }
//   ];

// const App = (props) => {

//     const [notes, setNotes] = useState(props.notes)
//     const [newNote, setNewNote] = useState('a new note...')
//     const [showAll, setShowAll] = useState(true)


//     const {courses} = props;

//   const addNote = (event) => {
//     event.preventDefault();
    
//     const noteObject = {
//       content: newNote,
//       date: new Date(),
//       important: Math.random() > 0.5,
//       id: notes.length + 1
//     };

//     setNotes(notes.concat(noteObject))
//     setNewNote('')
//   }

//   const handleNoteChange = (event) => {
//     setNewNote(event.target.value)
//   }

//   const notesToShow = showAll ? notes : notes.filter(note => note.important)

//   const rows = () => notesToShow.map(note => <Note key={note.id} note={note} />);

//   const handleImportantButton = () => {
//     setShowAll(!showAll)
//   }


//   const course_rows = () =>
//     courses.map(course => (
//       <Course key={course.id} course={course.name} exercises={course.exercises} />
//     ));
  

//   const exercises_array = () => courses.map(course => (
//     course.exercises
//   ))

//   const exercises_arr = exercises_array()

//   const res = () => exercises_arr.reduce((acc, current_value) => acc + current_value);

//   return (
//     <div>
//       <h1>Half Stack application Development</h1>
//       <ul>{course_rows()}</ul>
//       <p>Total: {res()}</p>
//       <h1>Notes</h1>
//       <button onClick={handleImportantButton}>
//       Show {showAll ? 'important' : 'all' }
//       </button>
//       <ul>{rows()}</ul>
//       <form onSubmit={addNote}>
//         <input value={newNote} onChange={handleNoteChange}/>
//         <button type="submit">save</button>
//       </form>
//       <div><PhoneBook /></div>
//     </div>
//   );
// };
