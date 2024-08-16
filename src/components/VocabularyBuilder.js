import React, { useState } from 'react';

const VocabularyBuilder = () => {
  const [words, setWords] = useState([
    { id: 1, word: 'Haus', translation: 'House' },
    { id: 2, word: 'Auto', translation: 'Car' },
    // Add more words as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNext = () => {
    setShowTranslation(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Vocabulary Builder</h2>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-lg">{words[currentIndex].word}</p>
        {showTranslation && <p className="mt-2 text-gray-500">{words[currentIndex].translation}</p>}
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? 'Hide Translation' : 'Show Translation'}
        </button>
        <button 
          className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VocabularyBuilder;
