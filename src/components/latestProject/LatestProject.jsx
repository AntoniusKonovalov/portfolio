import "./LatestProject.scss";

const LatestProject = () => {
  return (
    <div className="latest-container">
      <div className="mainCard">
        <div className="upperBoxCard">
          <h1>CLIMATE COMPANION</h1>
        </div>
        <div className="subCard">
          <p>
            Discover the Climate Companion: innovative IoT application designed
            for precise environmental monitoring. With a user-friendly mobile
            interface, you can view real-time data on humidity, temperature, and
            CO2 levels.
            <span style={{ display: "block", height: "20px" }}></span> The app
            also allows you to access historical data through clear, comparative
            graphs, enabling easy analysis and monitoring over different
            periods. Ideal for anyone seeking a smart way to stay informed about
            their surroundings.
          </p>
        </div>
          <button>more details</button>
      </div>
    </div>
  );
};

export default LatestProject;
