import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
    const [ click, setClick ] = useState({
        left: 0, right: 0
    })

    const handleLeftClick = () => {
        const newClicks = {
            left: click.left + 1,
            right: click.right
        }
        setClick(newClicks)
    }
    const handleRightClick = () => {
        const newClicks = {
            left: click.left,
            right: click.right + 1
        }
        setClick(newClicks)
    }
    

  return (
    <div>
      <div>
          {click.left}
          <button onClick={handleLeftClick}>Left</button>
          <button onClick={handleRightClick}>Right</button>
          {click.right}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)