import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <div className="text">
            <h1>IoT solutions</h1>
            <h1>&</h1>
            <h1>Web development </h1>
            {/* <h1>UI design</h1> */}
          </div>
          <div className="btnImgContainer">
            <div className="buttons">
              <button>See the Latest Work</button>
              <button>Contact Me </button>
            </div>
            <img src="/scroll.png" alt="" />
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/IoT.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;
