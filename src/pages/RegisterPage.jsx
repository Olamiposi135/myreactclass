import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const Verify = (e) => {
    e.preventDefault();
    if (email && password && isChecked) {
      if (password === confirmPassword) {
        setSuccess(true);
        setErrorPassword(false);
        setError(false);
      } else {
        setErrorPassword(true);
      }
    } else {
      setError(true);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {success && (
          <h3 className="text-green-700 text-2xl">
            Form Submitted Successfully !!!
          </h3>
        )}

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form onSubmit={Verify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "Text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute  px-3 text-lg right-0 bottom-3">
              {showPassword ? (
                <FiEyeOff onClick={togglePassword} />
              ) : (
                <FiEye onClick={togglePassword} />
              )}
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showPassword ? "Text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute  px-3 text-lg right-0 bottom-3">
              {showPassword ? (
                <FiEyeOff onClick={togglePassword} />
              ) : (
                <FiEye onClick={togglePassword} />
              )}
            </div>
            {errorPassword && (
              <p className="text-red-700">Password didn't match, check again</p>
            )}
          </div>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          {error && (
            <p className="text-red-600">Please fill in all credentials</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="hover:underline mr-2">
            Forgot password?
          </a>
          |
          <Link to="/login">
            <a href="" className="hover:underline ml-2">
              Already have an account ? Sign in
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
