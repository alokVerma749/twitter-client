'use client'

import { ChangeEvent, FormEvent, useState } from 'react';

import AuthButton from '@/app/components/AuthButton/AuthButton';
import Link from 'next/link';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here, such as calling an API
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#1d9bf0] via-[#0a72b6] to-[#76a1be]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-400">Sign Up</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>

        {/* OR Divider */}
        <div className="flex items-center justify-center mt-4">
          <span className="h-px bg-gray-300 w-full"></span>
          <span className="px-2 text-gray-500">OR</span>
          <span className="h-px bg-gray-300 w-full"></span>
        </div>

        {/* Google Authentication Button */}
        <div className="mt-4 flex justify-center items-center">
          <AuthButton />
        </div>

        {/* "Already a user? Login" section */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already a user?{' '}
            <Link href="/auth/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
