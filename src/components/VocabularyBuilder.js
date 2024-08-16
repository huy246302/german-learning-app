import React, { useState, useEffect } from 'react';
import { getWords, saveWord, updateWord, deleteWord } from '../firebaseFirestore';

const VocabularyBuilder = () => {
  const [words, setWords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage] = useState(5);
  const [editMode, setEditMode] = useState(null);
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

  // Function to update a word in Firestore
  const handleUpdateWord = async (id) => {
    await updateWord(id, newWord, newTranslation);
    setEditMode(null);
    setNewWord('');
    setNewTranslation('');

    const wordsFromDb = await getWords();
    setWords(wordsFromDb);
  };

  // Function to delete a word from Firestore
  const handleDeleteWord = async (id) => {
    await deleteWord(id);

    const wordsFromDb = await getWords();
    setWords(wordsFromDb);
  };

  // Pagination
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = words.slice(indexOfFirstWord, indexOfLastWord);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Vocabulary Builder</h2>

      {currentWords.length > 0 ? (
        currentWords.map((wordObj) => (
          <div key={wordObj.id} className="bg-white p-4 shadow rounded mb-4">
            {editMode === wordObj.id ? (
              <>
                <input
                  className="p-2 border rounded w-full"
                  type="text"
                  value={newWord}
                  onChange={(e) => setNewWord(e.target.value)}
                  placeholder="Update word"
                />
                <input
                  className="mt-2 p-2 border rounded w-full"
                  type="text"
                  value={newTranslation}
                  onChange={(e) => setNewTranslation(e.target.value)}
                  placeholder="Update translation"
                />
                <button
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => handleUpdateWord(wordObj.id)}
                >
                  Update
                </button>
                <button
                  className="mt-4 ml-4 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => setEditMode(null)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p className="text-lg">{wordObj.word}</p>
                <p className="mt-2 text-gray-500">{wordObj.translation}</p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => {
                    setEditMode(wordObj.id);
                    setNewWord(wordObj.word);
                    setNewTranslation(wordObj.translation);
                  }}
                >
                  Edit
                </button>
                <button
                  className="mt-4 ml-4 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDeleteWord(wordObj.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No words available. Please add some words.</p>
      )}

      {/* Pagination */}
      <div className="mt-4">
        {Array.from({ length: Math.ceil(words.length / wordsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

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
          onClick={handleAddWord}
        >
          Add Word
        </button>
      </div>
    </div>
  );
};

export default VocabularyBuilder;
