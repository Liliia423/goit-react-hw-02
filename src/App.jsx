import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import { useState } from 'react';




function App() {
  const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

  return (
    <>
      <Description /> 
       <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </>
  )
}

export default App
