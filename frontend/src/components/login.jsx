import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function LoginSignUp() {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { email, password,confirmPassword }

    if (isSignUp) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      
      const resSignup = await axios.post('http://localhost:5000/api/signup', userDetails)
      .then(res => {
      return res.data;
      })
      .catch(err => {
        if (err.response && err.response.data) {
          return err.response.data;  
        } else {
          console.error('Unexpected error:', err);
          return { success: false, message: 'An unexpected error occurred' };  
        }
      })

      console.log(resSignup);

      if(resSignup.success){
        alert(resSignup.message)
      }
      else{
        alert(resSignup.message)
      }
    } 
  else {
      
      const resLogin = await axios.post('http://localhost:5000/api/login', userDetails)
      .then(res => {
      return res.data;
      })
      .catch(err => {
        if (err.response && err.response.data) {
          return err.response.data;  
        } else {
          console.error('Unexpected error:', err);
          return { success: false, message: 'An unexpected error occurred' };  
        }
      })

      console.log(resLogin);

      if(resLogin.success){
        alert(resLogin.message)
      }
      else{
        alert(resLogin.message)
      }
    }
  };

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page or perform another action
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <div className="relative bg-white p-8 rounded shadow-2xl w-full max-w-md">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h2
          className="text-2xl font-semibold text-center mb-6"
          style={{ color: "#004953" }}
        >
          {isSignUp ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                placeholder="Confirm password"
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <div className="flex justify-between items-center mb-4 gap-2">
            <button
              type="submit"
              className="text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2"
              style={{ backgroundColor: "#004953" }}
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>

            <p
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
