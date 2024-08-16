import React, { useState, useEffect } from 'react';
import { getWords, saveWord } from '../firebaseFirestore';

const VocabularyBuilder = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [newWord, setNewWord] = useState('');
  const [newTranslation, setNewTranslation] = useState('');

  // Fetch words from Firestore on component mount
  useEffect(() => {
    const fetchWords = async () => {
      const wordsFromDb = await getWords();
      setWords(wordsFromDb);
    };

    fetchWords();
  }, []);

  // Function to add a new word to Firestore
  const handleAddWord = async () => {
    if (newWord && newTranslation) {
      await saveWord(newWord, newTranslation);
      setNewWord('');
      setNewTranslation('');

      // Refresh the word list after adding a new word
      const wordsFromDb = await getWords();
      setWords(wordsFromDb);
    }
  };

  const handleNext = () => {
    setShowTranslation(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Vocabulary Builder</h2>

      {words.length > 0 ? (
        <div className="bg-white p-4 shadow rounded">
          <p className="text-lg">{words[currentIndex]?.word}</p>
          {showTranslation && <p className="mt-2 text-gray-500">{words[currentIndex]?.translation}</p>}
          <button 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setShowTranslation(!showTranslation)}>
            {showTranslation ? 'Hide Translation' : 'Show Translation'}
          </button>
          <button 
            className="mt-4 ml-4 bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleNext}>
            Next Word
          </button>
        </div>
      ) : (
        <p>No words available. Please add some words.</p>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Add a New Word</h3>
        <input
          className="mt-2 p-2 border rounded w-full"
          type="text"
          placeholder="Word"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <input
          className="mt-2 p-2 border rounded w-full"
          type="text"
          placeholder="Translation"
          value={newTranslation}
          onChange={(e) => setNewTranslation(e.target.value)}
        />
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddWord}>
          Add Word
        </button>
      </div>
    </div>
  );
};

export default VocabularyBuilder;
