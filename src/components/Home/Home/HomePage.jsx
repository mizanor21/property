import Agents from "../Agents/Agents";
import Banner from "../Banner/Banner";
import InterestContact from "../InterestContact/InterestContact";
import LatestProperty from "../LatestProperty/LatestProperty";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestProperty></LatestProperty>
      <Services></Services>
      <Agents></Agents>
      <InterestContact></InterestContact>
    </div>
  );
};

export default Home;
