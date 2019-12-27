import React, { useState } from "react";
import ReactDOM from "react-dom";



const Statistics = ({name, good, bad, neutral}) => {
    if (good > 0 && bad > 0 && neutral > 0) {
        return (
            <div>
                <p>Good {good}</p>
                <p>Neutral {neutral}</p>
                <p>Bad {bad}</p>
                <p>Average {(good + neutral + bad) / 3}</p>
                <p>Positive Feedback %: {(good) / (good + neutral + bad) * 100} %</p>
    
            </div>
        )
    }
    return (
        <div>
            <h3>{name}</h3>
            <p>No feedback given</p>
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )

const App = props => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral]  = useState(0)
  const [bad, setBad] = useState(0)



  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
      setNeutral(neutral + 1)
  }

  const name = 'Statistics'

  return (
    <div>
      <div>
          <h3>Give Feedback</h3>
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
        <Statistics name={name} good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
