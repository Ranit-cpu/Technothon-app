// src/pages/RegisterPage.jsx
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const registerModalRef = useRef();
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [studentIdValid, setStudentIdValid] = useState(false);
  const [studentIdMessage, setStudentIdMessage] = useState("");
  const [studentIdValidating, setStudentIdValidating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (
        registerModalRef.current &&
        !registerModalRef.current.contains(e.target)
      ) {
        navigate(-1);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [navigate]);

  // Student ID validation via AJAX - matching register.html behavior
  useEffect(() => {
    const validateStudentId = async () => {
      const id = studentId.trim();
      if (id.length < 1) {
        setStudentIdMessage("");
        setStudentIdValid(false);
        return;
      }

      setStudentIdValidating(true);

      try {
        const response = await axios.post(
          "http://43.204.96.98:8000/validate_student_id",
          { college_id: id },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        if (response.status === 200 && response.data.status === "valid") {
          setStudentIdMessage("Student ID is valid!");
          setStudentIdValid(true);
        }
      } catch (error) {
        const errorMsg =
          error.response?.data?.detail || "Student ID hasn't matched or already registered";
        setStudentIdMessage(errorMsg);
        setStudentIdValid(false);
      } finally {
        setStudentIdValidating(false);
      }
    };

    const debounceTimer = setTimeout(validateStudentId, 500);
    return () => clearTimeout(debounceTimer);
  }, [studentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!studentIdValid) {
      setErrorMessage("Please enter a valid Student ID!");
      return;
    }

    if (!name.trim()) {
      setErrorMessage("Full Name is required!");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "http://43.204.96.98:8000/User_register",
        {
          college_id: studentId.trim(),
          name: name.trim(),
          email: email.trim(),
          password: password,
          phone_no: contactNo,
          whatsapp_no: whatsappNo,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        navigate(response.data.redirect || "/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      const errorMsg = error.response?.data?.detail || "Registration failed";
      setErrorMessage("Error: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        ref={registerModalRef}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="flex justify-between items-center border-b px-6 py-4 dark:border-gray-600">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Create an Account
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-white text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Student ID */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                Student ID
              </label>
              <input
                type="text"
                id="college_id"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Insert your student ID"
                required
              />
              {studentIdValidating && (
                <p className="mt-1 text-sm text-blue-500">Validating...</p>
              )}
              {studentIdMessage && (
                <p
                  id="student_id_message"
                  className={`mt-1 text-sm font-bold ${
                    studentIdValid ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {studentIdMessage}
                </p>
              )}
            </div>

            {/* Full Name */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Insert your full name"
                disabled={!studentIdValid}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Insert your email"
                disabled={!studentIdValid}
                required
              />
            </div>

            {/* Contact No */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                Contact No
              </label>
              <input
                type="tel"
                maxLength={10}
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter 10 digit number"
                disabled={!studentIdValid}
                required
              />
            </div>

            {/* WhatsApp No */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                WhatsApp No
              </label>
              <input
                type="tel"
                maxLength={10}
                value={whatsappNo}
                onChange={(e) => setWhatsappNo(e.target.value.replace(/\D/g, ""))}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Enter WhatsApp number"
                disabled={!studentIdValid}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                (If your WhatsApp number is the same as your phone number,
                please fill both fields with the same number)
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Insert your secret password"
                disabled={!studentIdValid}
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1 text-sm text-gray-700 dark:text-white">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded border text-sm dark:bg-gray-700 dark:text-white"
                placeholder="••••••••"
                disabled={!studentIdValid}
                required
              />
            </div>

            {/* Terms */}
            <div className="flex items-center">
              <input type="checkbox" required className="w-4 h-4 mr-2" />
              <label className="text-sm text-gray-500 dark:text-gray-300">
                I accept the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {errorMessage && (
              <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded px-4 py-2 mt-2 hover:bg-indigo-700 disabled:opacity-50"
              disabled={!studentIdValid || loading}
            >
              {loading ? "Creating..." : "Register"}
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-300">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;