import React, { useState } from "react";
import { useAuthContext } from "../context/auth_context";
import styled from "styled-components";
import { motion } from "framer-motion";

const Login = () => {
  const { login, loading, error } = useAuthContext();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <Wrapper>
      <motion.div
        className="login-container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bg};

  .login-container {
    background: white;
    padding: 2rem;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 10px;
    text-align: center;
    width: 350px;
    text-transform: ${({ caseStyle }) =>
      caseStyle === "upper" ? "uppercase" : "lowercase"};

    h2 {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.heading};
      text-transform: inherit; /* Inherits from .login-container */
    }

    .error {
      color: red;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
      text-transform: inherit; /* Follows caseStyle */
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        padding: 10px;
        margin: 0.5rem 0;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 5px;
        outline: none;
        transition: all 0.3s ease-in-out;
        text-transform: none; /* User types naturally */

        &:focus {
          border-color: ${({ theme }) => theme.colors.btn};
          box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.btn};
        }
      }

      button {
        background: ${({ theme }) => theme.colors.btn};
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 1rem;
        transition: all 0.3s ease-in-out;
        text-transform: inherit; /* Follows caseStyle */

        &:hover {
          background: ${({ theme }) => theme.colors.helper};
        }

        &:disabled {
          background: gray;
          cursor: not-allowed;
        }
      }
    }
  }
`;
