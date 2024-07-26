import React, { useState } from 'react';
import axios from 'axios';
import skillcapital from '../assets/skillcapital.png';
import background from '../assets/background.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      setSuccess('Login successful');
      // Save the token in localStorage or state
      localStorage.setItem('token', res.data.token);
      // Redirect to another page if needed
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        setError(err.response.data.msg);
      } else {
        setError('Server error');
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white">
        <div className="flex flex-col justify-center w-full max-w-sm md:max-w-md lg:max-w-lg">
          <div className="flex justify-center">
            <img
              alt="SkillCapital"
              loading="lazy"
              width="400"
              height="55"
              decoding="async"
              style={{ color: 'transparent' }}
              src={skillcapital}
            />
          </div>
          <div className="mt-10 bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-normal leading-6 text-gray-900" htmlFor="username">
                  User Name
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  className="block w-full rounded-lg border border-gray-300 p-1.5 text-gray-900 focus:border-sky-500 focus:outline-none h-12 sm:text-sm sm:leading-6"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <p className="hidden text-sm text-red-600 peer-invalid:block">Please enter username</p>
              </div>
              <div className="mt-5">
                <label className="block text-sm font-normal leading-6 text-gray-900" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="block w-full rounded-lg border border-gray-300 p-1.5 text-gray-900 focus:border-sky-500 focus:outline-none h-12 sm:text-sm sm:leading-6"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="hidden text-sm text-red-600 peer-invalid:block">Please enter password</p>
              </div>
              <div className="mt-9">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-lg bg-gradient-to-r from-orange-300 to-pink-500 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>
            {error && <div className="mt-4 text-red-600">{error}</div>}
            {success && <div className="mt-4 text-green-600">{success}</div>}
            <div className="flex gap-2 mt-8">
              <input type="checkbox" className="h-5 w-5" />
              <span className="font-normal text-sm text-gray-600">Remember Me</span>
            </div>
            <span className="text-gray-500 text-sm font-medium mt-24 text-center block">
              ©2024, All rights reserved
            </span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-1/2 flex flex-col justify-start items-center text-navy">
        <div 
          style={{ 
            backgroundImage: `url(${background})`, 
            position: 'absolute', 
            height: '100%', 
            width: '100%', 
            inset: '160px 10px 0px', 
            objectFit: 'none', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: 'transparent' 
          }} 
        />
        <div className="text-center p-8 mt-8 relative z-10">
          <h1 className="text-[#042D60] font-bold text-[2rem] leading-[normal]">Seamlessly manage all learner data in a unified platform.</h1>
          <p className="text-[#042D60] font-normal text-lg">Centralize customer data effortlessly. Streamline communication, sales, and support for seamless growth.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
