import "./services.scss";

import { motion } from "framer-motion";

const Services = ({ type }) => {
  return (
    <div className="services-container">
      <div className="backgroundImage">
        <img src="/circuitSchematics.webp" alt="" />
      </div>
      <div className="section section-left">
        <div className="glassTextCont">
          <div className="textCont">
            <h1>What I do?</h1>
            <div className="brakeLine">
              <svg
                width="450"
                height="55"
                viewBox="0 0 499 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.666667 49C0.666667 51.9455 3.05448 54.3333 6 54.3333C8.94552 54.3333 11.3333 51.9455 11.3333 49C11.3333 46.0545 8.94552 43.6667 6 43.6667C3.05448 43.6667 0.666667 46.0545 0.666667 49ZM445 49V50H445.388L445.675 49.738L445 49ZM6 50H445V48H6V50ZM445.675 49.738L498.175 1.73803L496.825 0.261971L444.325 48.262L445.675 49.738Z"
                  fill="#252c4a92"
                />
              </svg>
            </div>

            <p>
              I specialize in creating customized, automated solutions designed
              to enhance and simplify everyday processes. Whether you're looking
              to better control environments or ensure safety and learning
              through interactive features, I've got you covered. <br />
              My expertise lies in crafting both the hardware and the intuitive
              interfaces that allow you to effortlessly monitor and manage your
              systems. With my solutions, you can enjoy innovative, efficient,
              and easy-to-use enhancements tailored just for you.
            </p>
          </div>
        </div>
        <div className="infoRectangles">
          <div className="rectangle">
            <div className="textContent">
              <h2>Your Idea</h2>
              <div className="line">
                <div className="lineLine"></div>
              </div>
              <p>
                Automated hydroponics system based on analog and digital
                sensors, or a smart system to monitor and control your home
                using your mobile phone. The sky is the limit.
              </p>
            </div>
          </div>
          <div className="rectangle">
            <div className="textContent">
              <h2>My Hands</h2>
              <div className="line">
                <div className="lineLine"></div>
              </div>
              <p>
                Turning your idea into a reality. I will design and build the
                hardware and software to bring the system into your life.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="lineVertical"></div> */}
      </div>

      <div className="section section-right">
        <div className="circuit">
          <img src="/circuit.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
