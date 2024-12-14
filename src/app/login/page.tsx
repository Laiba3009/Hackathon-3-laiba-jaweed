"use client"
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
  };

  return (
    <div className="flex flex-col justify-center  items-center bg-white p-8 w-96">
      <h1 className="text-center font-bold text-lg text-black mb-8">
        YOUR ACCOUNT FOR EVERYTHING NIKE
      </h1>
      <form className="w-full text-center" onSubmit={handleSubmit}>
        <div className="w-full mb-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="flex justify-between items-center w-full mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span className="text-gray-600 text-sm">Keep me signed in</span>
          </div>
          <a href="#" className="text-gray-600 text-sm">
            Forgotten your password?
          </a>
        </div>
        <p className="text-center text-gray-600 text-xs mb-4">
          By logging in, you agree to Nikes{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="#" className="underline">
            Terms of Use
          </a>
          .
        </p>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded mb-4"
        >
          SIGN IN
        </button>
      </form>
      <p className="text-center text-gray-600 text-sm">
        Not a Member?{' '}
        <a href="#" className="underline">
          Join Us.
        </a>
      </p>
    </div>
  );
};

export default Login;
