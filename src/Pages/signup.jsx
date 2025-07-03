import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !reEnterPassword) {
      alert("All fields are required.");
      return;
    }

    if (password !== reEnterPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (password.length < 10) {
      alert("Password must be at least 10 characters long.");
      return;
    }

    // Prepare the data to send to the backend
    const formData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 201) {
        console.log(data.message);  // Signup successful
        navigate("/dashboard");  // Redirect to dashboard after successful signup
      } else {
        console.error(data.message);  // Show error message
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the form');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center px-4">
      <div className="bg-slate-800 p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-white font-bold text-center text-2xl mb-3">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="email"
            placeholder="Email"
            className="border px-2 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Enter Password"
            className="border px-2 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Re-enter Password"
            className="border px-2 py-2 rounded-md"
            value={reEnterPassword}
            onChange={(e) => setReEnterPassword(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="bg-yellow-400 py-2 px-28 rounded-md hover:bg-yellow-800 transition-all font-semibold mt-5"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
