import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (email, password) => {
    setIsLoading(true);
    setError(null);

    // post request to this endpoint
    // the method, headers, and body are the same things you'd do in Postman
    // this function is just defining the function
    const response = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    // this uses the function asynchronously and waits for a response before continuing
    const json = await response.json();

    !response.ok
      ? (setIsLoading(false), setError(json.error))
      : // save the user to local storage
        (localStorage.setItem("user", JSON.stringify(json)),
        // update the auth context
        dispatch({ type: "LOGIN", payload: json }),
        // update loading state
        setIsLoading(false));
  };

  return { register, isLoading, error };
};
