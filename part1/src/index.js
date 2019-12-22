import React from "react";
import ReactDOM from "react-dom";


const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <>
        <p>{props.parts[0].name} {props.parts[0].exercises}</p>
        <p>{props.parts[1].name} {props.parts[1].exercises}</p>
        <p>{props.parts[2].name} {props.parts[2].exercises}</p>
        </>
    )
};

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
        </div>
    )
}

const sum = (p1,p2) => {
    return p1 + p2
}

const result = sum(4,5)
console.log(result)

const App = () => {
    const course = {
        name: 'Half Stack Web Application',
        parts : [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
        
            {
                name: 'Using props to pass data',
                exercises: 7
            },
        
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
};





ReactDOM.render(<App />, document.getElementById("root"));
