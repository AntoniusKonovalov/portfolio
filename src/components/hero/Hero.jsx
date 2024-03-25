import { useState } from "react";
import { motion, useCycle } from "framer-motion";
import "./hero.scss";

const variants = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const buttons = [
  {
    text: "See the Latest Work",
  },
  {
    text: "Contact Me",
  },
];

const Hero = () => {
  const [activeBtn, setActiveBtn] = useState(Array(buttons.length).fill(false));
  const [animate, cycleAnimate] = useCycle("closed", "open");

  const toggleActive = (index) => {
    setActiveBtn((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
    cycleAnimate();
  };

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
              {/* <button>See the Latest Work</button>
              <button>Contact Me </button> */}
              {buttons.map((item, index) => (
                <motion.button
                  key={item.text}
                  onClick={() => toggleActive(index)}
                  className={activeBtn[index] ? "btnActive" : "btnNotActive"}
                  whileTap={{ scale: 0.95 }}
                  variants={variants}
                >
                  {item.text}
                </motion.button>
              ))}
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
