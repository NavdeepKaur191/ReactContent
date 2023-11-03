// Profile Component
import React, { useState } from "react";
import withAuthentication from "./withAuthentication";

function Profile({ userName, isAuth, setToken, removeToken, setIsAuth }) {
  const defaultMessage = "You must be authenticated to proceed.";
  const [message, setMessage] = useState(defaultMessage);

  const checkAuthentication = () => {
    if (isAuth) {
      setMessage(
        `Hi ${userName}, enjoy using our robust application that does absolutely nothing!!`
      );
    } else {
      setMessage("Halt! You are not an authenticated user and cannot proceed.");
    }
  };

  return (
    <div>
      <h1>Welcome to the Machine</h1>
      <h2>{message}</h2>
      <button onClick={checkAuthentication}>Check Auth</button>
      <button
        onClick={() => {
          setToken();
          setMessage(defaultMessage);
        }}
      >
        Set Token
      </button>
      <button
        onClick={() => {
          removeToken();
          setMessage(defaultMessage);
        }}
      >
        Remove Token
      </button>
    </div>
  );
}

export default withAuthentication(Profile);
