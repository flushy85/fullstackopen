import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [value, setValue] = useState(0)
  const [votes, setVotes] = useState(0)
  const [count, setCount] = useState(new Uint8Array(6))

  const setToValue = (newValue) => {
    setValue(newValue)
    setVotes(count[newValue])
    
  }
  
  const setToCount = (newValue) => {
    count[value] += 1
    setVotes(newValue)
    console.log(count)
  }
  const arrayMaxIndex = function(array) {
    return array.indexOf(Math.max.apply(null, array));
  }

  
  return (
    <div>
      {props.anecdotes[value]}
      <br/>
       Votes: {votes}
      <br/>
      <button onClick={() => setToCount(count[value] + 1)}>
        Vote
      </button>
      <button onClick={() => setToValue(Math.floor(Math.random() * 6))}>
        Get New Quote
      </button>
      <br/>
      {props.anecdotes[arrayMaxIndex(count)]} 
      <br/>
      Has {count[arrayMaxIndex(count)]} votes
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)