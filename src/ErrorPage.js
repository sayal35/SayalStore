import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>Oh No! You are lost</h3>
          <p>
            The page you are looking for doesnot exist. How you got here is a
            mystery.But you can click the button below to go back to the
            homepage.
          </p>
          <NavLink to="/">
            <Button>Home page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
  }
  h2 {
    font-size: 10 rem;
  }
  h3 {
    font-size: 4.2rem;
  }
  p {
    margin: 2rem 0;
  }
`;
export default ErrorPage;
