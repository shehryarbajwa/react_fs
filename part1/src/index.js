import React from "react";
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
        <p>{props.name[3].name}</p>
    )
}
const arto = {
    name: 'Shehryar Bajwa',
    age: 30,
    education: 'high school dropout',
    greet: function(){
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a,b){
        console.log(a + b)
    },
    doMath: function(a){
        console.log(a* this.age)
        return a * this.age
    }
}

arto.doAddition(1,4)
const referenceToAddition = arto.doAddition
referenceToAddition(10,15)

arto.greet()
arto.name = 'Taymur'
//Here this now refers to the referenceToGreet which is a global variable
//When we bind it to arto, we use arto's internal declared value


const referenceToGreet = arto.greet.bind(arto)
referenceToGreet()

arto.growOlder = function(){
    this.age += 1
}

const math = arto.doMath.bind(arto)
math(10)

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

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
            },
            {
                name:'Learning React JSX Syntax',
                exercises: 8
            }
        ]
    }


  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        <Growth name={course.parts} />
    </div>
  )
};





ReactDOM.render(<App />, document.getElementById("root"));
