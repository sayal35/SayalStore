import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const { user, token } = JSON.parse(storedAuth);
      setUser(user);
      setToken(token);
    }
  }, []);

  // Register
  const register = async (userData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        userData
      );

      localStorage.setItem("auth", JSON.stringify(data));
      setUser(data.user);
      setToken(data.token);

      toast.success("Account successfully registered! Please log in.");
      return true; // Registration successful
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("Email already in use. Please use a different email.");
        } else {
          toast.error(error.response.data.message || "Error in registration.");
        }
      } else {
        toast.error("Server error. Please try again later.");
      }

      return false; // Registration failed
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (userData) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        userData
      );
      localStorage.setItem("auth", JSON.stringify(data));
      setUser(data.user);
      setToken(data.token);

      toast.success("Login successful!");
      return true; // Login successful
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Invalid credentials.");
      } else {
        toast.error("Server error. Please try again later.");
      }
      return false; // Login failed
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("auth");
    setUser(null);
    setToken(null);
    toast.success("Logged out successfully.");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, loading, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuthContext };
