import React, {useState} from "react";

const Statistics = (props) => {
      if (props.good.lenght === 0 && props.neutral.lenght === 0 && props.bad.lenght === 0) {
        return (
          <div>No feedback given</div>
        )
      }
  return(
      <div>
        <div>
        <div>Good: {props.good}</div>
        <div>Neutral: {props.neutral}</div>
        <div>Bad: {props.bad}</div>
        </div>
      </div>

    )
  

  
}

const Button = ({handleClick, text}) => (
  <button onClick = {handleClick}>{text}</button>
)



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //const [stats, setAll] = useState([]);


const handleGoodClick = () => {
  setGood(good + 1)
  }


const handleBadClick = () => {
  setBad(bad + 1)
  }

const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  }


return(
  <div>
    <h1>Give us feedback</h1>

    <div>
      <Button handleClick={handleGoodClick} text='Good'/>

      <Button handleClick={handleNeutralClick} text='Neutral'/>

      <Button handleClick={handleBadClick} text='Bad'/>
    </div>

      <h2>Feedback history:</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    
    </div>
)

}



export default App;