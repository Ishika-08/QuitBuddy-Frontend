import { Button } from '@mantine/core';
import {useState} from 'react'

const style = {
    width: '50%',
    margin: '8rem auto',
    padding: '6rem',
    borderRadius: '1rem',
    height: '30vh',
    boxShadow: '1px 2px 3px gray'
}

export default function triggers(){
    const [answers, setAnswers] = useState<string>();
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    //     const {value} = e.target;
    //     const updatedAnswers = value
    //     setAnswers(updatedAnswers)
    // }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        let updatedAnswers = answers;
        updatedAnswers = value;
        setAnswers(updatedAnswers);
      };
    

    return (
        <>
            <div style = {style}>
        <h2>What is the trigger?</h2>
        <input
          type='text'
          value= {answers}
          onChange={handleInputChange}
        />
        <div>
        <Button>Submit</Button>

        </div>
        {/* <div className="nav-buttons">
          {currentCard > 0 && (
            <button onClick={handlePrevCard}>Previous</button>
          )}
          {currentCard < questions.length - 1 ? (
            <button onClick={handleNextCard}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div> */}
      </div>
        </>
    )
}