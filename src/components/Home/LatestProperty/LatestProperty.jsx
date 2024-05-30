import house1 from "../../../assets/images/card/house1.png";
import house2 from "../../../assets/images/card/house2.png";
import house3 from "../../../assets/images/card/house3.jpg";
import house4 from "../../../assets/images/card/house4.jpg";
import house5 from "../../../assets/images/card/house5.jpg";
import house6 from "../../../assets/images/card/house6.jpg";

const LatestProperty = () => {
  const houses = [house1, house2, house3, house4, house5, house6];

  return (
    <div className="container mx-auto my-20">
      <div>
        <h2 className="text-3xl text-balance border-l-4 pl-5 border-green-600">
          Latest Properties
        </h2>
      </div>
      <div className=" my-5 flex flex-wrap gap-2">
        {houses.map((house, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[47%] md:w-[30%] shadow-xl hover:opacity-80"
          >
            <figure className="w-full">
              <img
                className="w-full h-[300px] object-cover "
                src={house}
                alt={`House ${index + 1}`}
              />
            </figure>
            <div className="absolute bottom-0 left-0 w-full text-white p-4">
              <h2 className="text-xl font-bold">HOUSE {index + 1} &#8594;</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProperty;
