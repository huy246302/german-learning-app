import React from 'react';

const ListeningPractice = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Listening Practice</h2>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-lg mb-2">Listen to the following sentence and practice pronunciation:</p>
        <audio controls className="w-full">
          <source src="path/to/your/audiofile.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="mt-4">Repeat after listening to the audio to practice your pronunciation.</p>
      </div>
    </div>
  );
};

export default ListeningPractice;
