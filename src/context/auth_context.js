import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //check if user is already logged in
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { user, token } = JSON.parse(storedAuth);
      setUser(user);
      setToken(token);
    }
  }, []);

  //register
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        userData
      );
      localStorage.setItem("auth", JSON.stringify(data));
      setUser(data.user);
      setToken(data.token);
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  //login
  const login = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        userData
      );
      localStorage.setItem("auth", JSON.stringify(data));
      setUser(data.user);
      setToken(data.token);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  // Logout user
  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, error, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuthContext };
