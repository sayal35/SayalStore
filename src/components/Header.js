import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <div className="logo">
        <NavLink to="/">
          <img src="./images/sayal.webp" alt="my logo img" />
        </NavLink>
      </div>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo img {
    max-height: 8rem;
    width: auto;
  }
`;

export default Header;
