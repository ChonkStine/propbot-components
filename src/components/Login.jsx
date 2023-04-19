import React from 'react';

function Login() {
  return (
    <form className="w-full sm:w-[400px] mx-auto px-6 py-[80px] md:py-9  bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Log In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold mt-3 py-2 w-full rounded-md hover:bg-blue-600 transition duration-200"
      >
        Log In
      </button>

      <div className="mt-4 text-center">
        <span className="text-gray-600">Don't have an account?</span>
        <a
          href="/signup"
          className="ml-1 text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
        >
          Sign Up
        </a>
      </div>
    </form>
  );
}

export default Login;
