import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Sayal Ecommerce",
  };
  return (
    <>
      <h1>{myName}</h1>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
