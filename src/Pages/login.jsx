import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Both fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json(); // Always parse response JSON

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token); // Save token in localStorage
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Network error or server issue. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 rounded-md hover:bg-yellow-800 transition-all font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-white">
          Don’t have an account?{' '}
          <span
            className="text-yellow-400 font-bold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
