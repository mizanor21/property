import Agents from "../Agents/Agents";
import Banner from "../Banner/Banner";
import InterestContact from "../InterestContact/InterestContact";
import LatestProperty from "../LatestProperty/LatestProperty";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestProperty></LatestProperty>
      <Agents></Agents>
      <InterestContact></InterestContact>
    </div>
  );
};

export default Home;
