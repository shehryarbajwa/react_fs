import React from "react";
import ReactDOM from "react-dom";
import Note from "./Components/Note";
import Course from "./Components/Course";

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];

const courses = [
    {
      name: "Fundamentals of React",
      exercises: 10,
      id: 1
    },
    {
      name: "Using props to pass data",
      exercises: 7,
      id: 2
    },
    {
      name: "State of a component",
      exercises: 14,
      id: 3
    }
  ];

const App = (props) => {
    const {notes, courses} = props;
  //Here the child component gets the key declared so there is no need to declared it again within the Component
  const rows = () => notes.map(note => <Note key={note.id} note={note} />);

  const course_rows = () =>
    courses.map(course => (
      <Course key={course.id} course={course.name} exercises={course.exercises} />
    ));
  

  const exercises_array = () => courses.map(course => (
    course.exercises
  ))

  const exercises_arr = exercises_array()

  const res = () => exercises_arr.reduce((acc, current_value) => acc + current_value);

  return (
    <div>
      <h1>Half Stack application Development</h1>
      <ul>{course_rows()}</ul>
      <p>Total: {res()}</p>
      <h1>Notes</h1>
      <ul>{rows()}</ul>
    </div>
  );
};

ReactDOM.render(
  <App notes={notes} courses={courses} />,
  document.getElementById("root")
);
