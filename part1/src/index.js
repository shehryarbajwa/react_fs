import React, {useState} from "react";
import ReactDOM from "react-dom";


const Header = (props) => {
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

const Growth = (props) => {
    return (
        <p>{props.parts.name}</p>
    )
}

//Here this now refers to the referenceToGreet which is a global variable
//When we bind it to arto, we use arto's internal declared value

const Hello = (props) => {

    const {name, age} = props.parts[4]

    const bornYear = () => new Date().getFullYear() - age


    return (
        <div>
            <li>
                Hello {name}, you are {age} years old.
            </li>
            <p>
                So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

const Counter = (props) => {
    const {counter} = props
    return (
        <div>{counter}</div>
    )
}

const App = () => {

    let counter = 1;

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
            },
            {
                name:'Learning React JSX Syntax',
                exercises: 8
            },
            {
                name:'Shehryar',
                age: 26
            }
        ]
    }

    const refresh = () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    }

    setInterval(() => {
        refresh()
        counter += 1
    }, 5000)


  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        <Growth parts={course.parts[3]} />
        <Hello parts={course.parts} />
        <Counter counter={counter} />
    </div>
  )
};





ReactDOM.render(<App />, document.getElementById("root"));
