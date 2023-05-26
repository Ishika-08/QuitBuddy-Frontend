import React, { useState } from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

interface Question {
  question: string;
  type: 'number' | 'text';
  key: string;
}

const questions: Question[] = [
  {
    question: 'What is your age?',
    type: 'number',
    key: 'age'
  },
  {
    question: 'How many cigarettes do you take in a day on average?',
    type: 'number',
    key: 'cigarettes'
  }
];

const Quiz: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const updatedAnswers = [...answers];
    updatedAnswers[currentCard] = value;
    setAnswers(updatedAnswers);
  };

  const handleNextCard = () => {
    if (currentCard < questions.length - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleSubmit = () => {
    // Handle submission of answers
    const formData: { [key: string]: string } = {};
    questions.forEach((e, index) => {
      formData[e.key] = answers[index];
    });
    console.log(formData);
    navigate('/dashboard')
  };

  return (
    <div className="carousel-container">
      <div className="card">
        <h2>{questions[currentCard].question}</h2>
        <input
          type={questions[currentCard].type}
          value={answers[currentCard] || ''}
          onChange={handleInputChange}
        />
        <div className="nav-buttons">
          {currentCard > 0 && (
            <button onClick={handlePrevCard}>Previous</button>
          )}
          {currentCard < questions.length - 1 ? (
            <button onClick={handleNextCard}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

