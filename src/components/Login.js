import React, { useState } from "react";
import { useAuthContext } from "../context/auth_context";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { login, loading } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData);
    if (success) {
      toast.success("Login successful!");
      navigate("/");
    }
  };

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="grid grid-two-column">
          <div className="image-section">
            <figure>
              <img src="/images/hero.jpg" alt="Hero" />
            </figure>
          </div>

          <div className="form-section">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="email">Email Id:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="Enter your email id"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div className="button-wrapper">
                <Button type="submit"> Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    max-width: 1000px;
    max-height: 1000px;
    width: 95%;
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .image-section figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .image-section img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .form-section h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  .input-wrapper label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .input-wrapper input {
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    text-transform: none !important;
  }
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
    .image-section {
      display: none;
    }
    .container {
      padding: 1.5rem;
    }
  }
`;

export default Login;
