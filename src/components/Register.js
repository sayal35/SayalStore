import React, { useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/auth_context";
import { Button } from "../styles/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register, loading } = useAuthContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    answer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(formData); 

    if (success) {
      navigate("/login"); 
    }
  };

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="grid grid-two-column">
          {/* left section  */}
          <div className="image-section">
            <figure>
              <img src="/images/hero.jpg" alt="Hero" />
            </figure>
          </div>
          <div className="form-section">
            <h2>Register </h2>
            <form onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="name">User Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                  placeholder="Enter your username"
                />
              </div>
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
              <div className="input-wrapper">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleChange}
                  required
                  placeholder="Enter your address"
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="answer">Answer:</label>
                <input
                  type="text"
                  id="answer"
                  name="answer"
                  onChange={handleChange}
                  required
                  placeholder="If you forgot your password it is required to change"
                />
              </div>
              <div className="button-wrapper">
                <Button type="submit"> Register</Button>
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

export default Register;
