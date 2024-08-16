import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import VocabularyBuilder from './components/VocabularyBuilder';
import GrammarExercises from './components/GrammarExercises';
import ListeningPractice from './components/ListeningPractice';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vocabulary" element={<VocabularyBuilder />} />
          <Route path="/grammar" element={<GrammarExercises />} />
          <Route path="/listening" element={<ListeningPractice />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
