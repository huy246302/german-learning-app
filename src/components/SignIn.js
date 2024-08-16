import React, { useState } from 'react';
import { signIn } from '../firebaseAuth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert('Sign-in successful');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignIn}>Sign In</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignIn;
