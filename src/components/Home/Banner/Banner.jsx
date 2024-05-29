// import banner1 from "../../../assets/images/banner1.png";
const Banner = () => {
  return (
    <div
      className="hero min-h-[700px] relative top-[-50px]"
      style={{
        backgroundImage:
          "url(https://imtiaz.ae/uploads/property/8/pearl_house_main.png)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
