import React, { useState } from 'react';
import './Quiz.css';
import { useNavigate, useParams } from 'react-router-dom';

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
    question: 'What is your weight?(in Kg)',
    type: 'number',
    key: 'weight'
  },
  {
    question: 'What is your height? (in cm)',
    type: 'number',
    key: 'height'
  },
  {
    question: 'What is your Gender?',
    type: 'text',
    key: 'gender'
  },
  {
    question: 'How many cigarettes do you take in a day on average?',
    type: 'number',
    key: 'smoked'
  }
];

const Quiz: React.FC = () => {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>([]); // Changed the state type to string[]
  const navigate = useNavigate();
  const { userID } = useParams();

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

  const handleSubmit = async () => {
    const formData = {
      age: parseInt(answers[0]),
      weight: parseInt(answers[1]),
      height: parseInt(answers[2]),
      gender: answers[3],
      avgSmoked: parseInt(answers[4])
    };

    try {
      const response = await fetch(`https://geeks-for-geeks-health-backend.up.railway.app/${userID}/medicalData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate(`/${userID}/dashboard`);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error: any) {
      console.log('Error:', error.message);
    }
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
