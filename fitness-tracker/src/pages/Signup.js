import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Signup = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [error, setError] = useState(''); // State for error messages
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Email:', email, 'Password:', password); // Debugging

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signup successful');
      setEmail('');
      setPassword('');
      navigate('/dashboard'); 
    } catch (err) {
      console.error("Signup Error:", err);
      const errorMessage = err?.message || 'An error occurred during signup.'; 
      setError(errorMessage);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
      </form>
    </div>
  );
};

export default Signup;
