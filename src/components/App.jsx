import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(
      window.localStorage.getItem("saved-feedback")
    );
    return (
      savedFeedback || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  const addReviewHeandler = (review) => {
    setFeedback({ ...feedback, [review]: feedback[review] + 1 });
  };

  const totalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const total = totalFeedback();

  const resetFeedback = () => {
    setFeedback((feedback) => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        addReview={addReviewHeandler}
        total={total}
        resetFeedback={resetFeedback}
      ></Options>
      {!total ? (
        <Notification />
      ) : (
        <Feedback {...feedback} total={total}></Feedback>
      )}
    </>
  );
}

export default App;
