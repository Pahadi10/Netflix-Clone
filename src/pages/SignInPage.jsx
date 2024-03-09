import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.trim() === "" || !emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePassChange = (e) => {
    const { value } = e.target;
    setPassword(value);

    if (value.trim() === "" || value.length < 4 || value.length > 60) {
      setPasswordError("Your password must contain between 4 and 60 characters.");
    } else {
      setPasswordError("");
    }
  };

  const signInHandler = () => {
    if (passwordError === "" && emailError === "" && email !== "" && password !=="") {
      setLoggedIn(true);
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify({ email }));
      }
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  // Check if user is already logged in (based on localStorage)
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
    }
  }, []);

  if (loggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-bg">
      <Link to="/">
        <button className="logo-div">
          <img src="../src/assets/loginPage/NetflixLogo.png" className="nav-logo" alt="Netflix Logo" />
        </button>
      </Link>
      <div className="flex justify-center">
        <div className="sign-in-div flex flex-col items-center">
          <div className="sign-in-text">
            <h1>Sign In</h1>
          </div>
          <div className="flex flex-col gap-4 login-form">
            <input
              type="email"
              className="email-inp"
              placeholder="Email or phone number"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <div className="text-red-600">{emailError}</div>}
            <input
              type="password"
              className="password-inp"
              placeholder="Password"
              value={password}
              onChange={handlePassChange}
            />
            {passwordError && <div className="text-red-600">{passwordError}</div>}
            <div className="flex gap-1 remember-me-div">
              <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="login-button" onClick={signInHandler}>
              Sign In
            </button>
            <div className="flex justify-between text-sm">
              <div>Need Help?</div>
              <div>
                <Link to="/">Sign up Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
