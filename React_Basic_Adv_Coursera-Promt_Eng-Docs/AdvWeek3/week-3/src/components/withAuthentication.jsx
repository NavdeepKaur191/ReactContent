// withAuthentication HOC
import React, { useState, useEffect } from "react";

function withAuthentication(WrappedComponent, redirectTo = "/login") {
  return function ({tokenValue, ...props}) {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isAuth, setIsAuth] = useState(!!token);

    const setTokenInLocalStorage = () => {
      localStorage.setItem("token", tokenValue);
      setToken(tokenValue);
    };

    const removeTokenFromLocalStorage = () => {
      localStorage.removeItem("token");
      setToken(null);
    };

    useEffect(() => {
      setIsAuth(!!token);
    }, [token]);

    return (
      <WrappedComponent
        {...props}
        isAuth={isAuth}
        setToken={setTokenInLocalStorage}
        removeToken={removeTokenFromLocalStorage}
        setIsAuth={setIsAuth}
      />
    );
  };
}
export default withAuthentication;
