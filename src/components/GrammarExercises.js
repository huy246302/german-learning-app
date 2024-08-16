import React from 'react';
import { Link } from 'react-router-dom';

const GrammarExercises = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Grammar Exercises</h2>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-lg mb-2">Complete the following grammar exercises to practice your German skills:</p>
        
        {/* Example Exercise 1 */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Exercise 1: Fill in the Blanks</h3>
          <p className="mb-2">Complete the sentences with the correct form of the verb:</p>
          <p className="mb-2"><strong>Ich (haben) _____ ein Buch.</strong></p>
          <p className="mb-2"><strong>Du (sein) _____ sehr freundlich.</strong></p>
        </div>
        
        {/* Example Exercise 2 */}
        <div>
          <h3 className="text-lg font-semibold">Exercise 2: Choose the Right Option</h3>
          <p className="mb-2">Select the correct option to complete the sentences:</p>
          <p className="mb-2"><strong>Er (geht / gehen) _____ zur Schule.</strong></p>
          <p className="mb-2"><strong>Wir (haben / hat) _____ ein neues Auto.</strong></p>
        </div>
      </div>
      <Link to="/" className="block mt-4 text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default GrammarExercises;
