import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text }) => (  
    <button onClick={onCLick}>
        {text}
    </button> 
)


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = (newValue) => {
    setBad(newValue)
  }

  const handleNeutralClick = (newValue) => {
    setNeutral(newValue)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='Good'/>
      <h1>Statistics</h1>
      <Stats />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)