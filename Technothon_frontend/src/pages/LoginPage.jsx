import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const loginModalRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handler = (e) => {
      if (loginModalRef.current && !loginModalRef.current.contains(e.target)) {
        navigate(-1);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const res = await axios.post(
        "http://43.204.96.98:8000/User_login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
           withCredentials: true,
        }
      );
      console.log("Login success:", res.data);
      navigate(res.data.redirect || "/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      const errorMsg = err.response?.data?.detail || "Login failed. Check credentials.";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        ref={loginModalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md relative"
      >
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl"
        >
          ×
        </button>

        <div className="mb-6 text-center pt-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome Back
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Sign in to access your account
          </p>
        </div>

        <form className="space-y-6 px-8 pb-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white rounded px-4 py-2 mt-2 hover:bg-indigo-700 disabled:bg-gray-500"
            disabled={!email || !password}
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-6 mb-6 text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <a href="/" className="text-violet-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;