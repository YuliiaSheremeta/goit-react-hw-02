import { useState, useEffect } from 'react'

import './App.module.css'
import Description from '../Description/Description';
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
 
const updateFeedback = (feedbackType) => {
  setFeedback((prevFeedback) => ({
    ...prevFeedback,[feedbackType]: prevFeedback[feedbackType]+1,
  }));
}

  return (
    <div>
    <Description />
      <Options onUpdateFeedback={updateFeedback} />
      <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad } />
    </div>
  );
};


