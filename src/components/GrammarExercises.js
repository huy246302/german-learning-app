import React, { useState } from 'react';

const GrammarExercises = () => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCheckAnswer = () => {
    if (answer.trim().toLowerCase() === 'ich bin') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Grammar Exercises</h2>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-lg mb-2">Fill in the blank: "_____ glücklich."</p>
        <input 
          type="text" 
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border p-2 rounded"
        />
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleCheckAnswer}
        >
          Check Answer
        </button>
        {isCorrect !== null && (
          <p className={`mt-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect, try again.'}
          </p>
        )}
      </div>
    </div>
  );
};

export default GrammarExercises;
