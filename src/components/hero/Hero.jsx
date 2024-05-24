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

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const scrollBtnVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const buttons = [
  {
    text: "See the Latest Work",
    href: "#LatestProject",
  },
  {
    text: "Contact Me",
    href: "#Contact",
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
        <motion.div
          className="scrollImgCont"
          variants={scrollBtnVariants}
          animate="scrollButton"
        >
          <img src="/scroll.png" alt="Scroll" />
        </motion.div>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className="text" variants={textVariants}>
            <motion.h2 variants={textVariants}>Anton Konovalov</motion.h2>
            <motion.h1 variants={textVariants}>IoT solutions</motion.h1>
            <motion.h1 variants={textVariants}>&</motion.h1>
            <motion.h1 variants={textVariants}>Web development </motion.h1>
          </motion.div>
          <motion.div className="btnContainer" variants={textVariants}>
            <motion.div className="buttons" variants={textVariants}>
              {buttons.map((item, index) => (
                <a href={item.href} key={item.text} style={{ textDecoration: 'none' }}>
                  <motion.button
                    onClick={() => toggleActive(index)}
                    className={activeBtn[index] ? "btnActive" : "btnNotActive"}
                    whileTap={{ scale: 0.95 }}
                    variants={[variants, textVariants]}
                  >
                    {item.text}
                  </motion.button>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/IoT.webp" alt="IoT" />
      </div>
    </div>
  );
};

export default Hero;
