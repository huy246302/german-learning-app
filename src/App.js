import React from 'react';
import VocabularyBuilder from './components/VocabularyBuilder';
import GrammarExercises from './components/GrammarExercises';
import ListeningPractice from './components/ListeningPractice';

function App() {
  return (
    <div className="App">
      <VocabularyBuilder />
      <GrammarExercises/>
      <ListeningPractice />
    </div>
  );
}

export default App;
