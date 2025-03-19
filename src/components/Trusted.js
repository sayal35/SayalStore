import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://img.freepik.com/premium-vector/i-love-nepal-logo-design_85216-22.jpg?w=2000"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://kthreedesign.com.np/wp-content/uploads/2019/12/nepalaya.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://th.bing.com/th/id/OIP.hHnnV1cOXcKb0OnYRUO8bQHaHa?rs=1&pid=ImgDetMain"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://th.bing.com/th/id/OIP.1SNfsO1so5VfTtO2pNoUnAAAAA?rs=1&pid=ImgDetMain"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
