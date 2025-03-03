import { useState, useEffect } from 'react'

import css from './App.module.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
  
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedback));
  }, [feedback]);
 
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback, [feedbackType]: feedback[feedbackType] + 1
    });
  };
 
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedback = () => {
    const resetData = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetData);
};

  return (
    <div>
    <Description />
      <Options onUpdateFeedback={updateFeedback} total={totalFeedback} onResetFeedback={resetFeedback} />
      {totalFeedback > 0 ? <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={totalFeedback} positive={positiveFeedback} /> : <Notification/>}
    </div>
  );
};


