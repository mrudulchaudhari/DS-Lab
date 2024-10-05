import React, { useState } from 'react';

function QuestionSet({ questions, title }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId, answer) => {
    if (!submitted) {
      setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
    }
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length !== questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    
    let newScore = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="question-set">
      <h3>{title}</h3>
      {questions.map((q, index) => (
        <div key={index} className="question">
          <p><strong>{index + 1}. {q.question}</strong></p>
          {q.options.map((option, optionIndex) => (
            <div key={optionIndex} className="option">
              <input
                type="radio"
                id={`q${index}-${optionIndex}`}
                name={`question-${index}`}
                value={option}
                checked={userAnswers[index] === option}
                onChange={() => handleAnswer(index, option)}
                disabled={submitted}
              />
              <label htmlFor={`q${index}-${optionIndex}`}>{option}</label>
              {submitted && option === q.correctAnswer && " ✓"}
            </div>
          ))}
          {submitted && userAnswers[index] !== q.correctAnswer && (
            <p style={{ color: 'red' }}>Your answer: {userAnswers[index]}</p>
          )}
        </div>
      ))}
      {!submitted ? (
        <button onClick={handleSubmit}>Submit</button>
      ) : (
        <>
          <p>Your score: {score} out of {questions.length}</p>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
}

export default QuestionSet;