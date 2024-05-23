import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Navigate } from "react-router-dom";
import Button from '@mui/material/Button';

const MainPageContent = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);

    if (value.trim() === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    // Validation before submission
    if (email.trim() === "") {
      setEmailError("Email is required");
    } else {
      // Email field is not empty, show sign-in page
      setShowSignIn(true);
    }
  };

  if (showSignIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="home-content">
      <h1>Unlimited movies, TV shows and more</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <div className="flex justify-center flex-wrap gap-10">

        <TextField
          sx={{ caretColor: "red", minWidth: 250 }}
          onChange={handleEmailChange}
          id="email"
          label="Email address"
          variant="outlined"
          autoComplete="email"
          minLength="5"
          maxLength="50"
          type="email"
          className="email-input"
          error={!!emailError}
          helperText={emailError}
          InputProps={{
            style: {
              color: "white",
            },
            classes: {
              notchedOutline: emailError
                ? "email-error-outline"
                : "email-notched-outline",
            },
          }}
          InputLabelProps={{
            className: "email-label",
          }}

        />

        <Button
          variant="contained"
          color="primary"
          className="getStarted"
          onClick={handleSubmit}
          sx={{
              backgroundColor: 'red', // This will apply the red background on hover
            '&:hover': {
              backgroundColor: 'red', // This will apply the red background on hover
            }
          }}
        >
          Get Started &gt;
        </Button>
      </div>
    </div>
  );
};

export default MainPageContent;
