import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import VocabularyBuilder from './components/VocabularyBuilder';
import GrammarExercises from './components/GrammarExercises';
import ListeningPractice from './components/ListeningPractice';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/vocabulary"
          element={
            <PrivateRoute>
              <Layout user={user}>
                <VocabularyBuilder />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/grammar"
          element={
            <PrivateRoute>
              <Layout user={user}>
                <GrammarExercises />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/listening"
          element={
            <PrivateRoute>
              <Layout user={user}>
                <ListeningPractice />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
