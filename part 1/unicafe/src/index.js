import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  )
}


const Statistics = ({good, bad, neutral, average, positive, all}) => {
  if(all === 0)
    return (
      <div>
        No Feedback Given
      </div>
    )
  
  return (
    <table>
     <Statistic text="Good" value={good} />
      <Statistic text="Neutral" value={neutral} />
      <Statistic text="Bad" value={bad} />
      <Statistic text="All" value={all} />
      <Statistic text="Average" value={average} />
      <Statistic text="Positive" value={positive} />
    </table>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
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

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const total = good + bad + neutral
  const average = (good - bad) / total 
  const positive = 100 / (total / good) + ' %'
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='Good'/>
      <Button onClick={handleNeutralClick} text='Neutral'/>
      <Button onClick={handleBadClick} text='Bad'/>
      <br/>
      <h1>Statistics</h1>
      <Statistics 
        good={good}
        bad={bad}
        neutral={neutral}
        positive={positive}
        average={average}
        all={total} 
      />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)