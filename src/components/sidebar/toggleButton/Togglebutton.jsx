import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { motion, useCycle } from "framer-motion";

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
const Togglebutton = ({ setOpen, open, activeSection }) => {
  const [animate, cycleAnimate] = useCycle("closed", "open");

  const toggleBtn = () => {
    setOpen((prev) => !prev);
    cycleAnimate();
  };

  const boxShadowStyles = {
    Homepage: {
      stroke: "black",
      boxShadow: "5px 5px 8px #c2c2c2, -5px -5px 8px #f4f2ee",
      backgroundColor: "#F4F2EE",
    },
    Services: {
      stroke: "black",
      boxShadow: "5px 5px 8px #c2c2c2, -5px -5px 8px #F8F8F9",
      backgroundColor: "#F8F8F9",
    },
    LatestProject: {
      stroke: "white",
      boxShadow: "9px 9px 17px #2e231f, -9px -9px 17px #563529",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(5px)",
      borderTop: "1px solid rgba(255, 255, 255, 0.5)",
      borderLeft: " 1px solid rgba(255, 255, 255, 0.5)",
    },
    Contact: "20px 20px 40px #e8e7e4, -20px -20px 40px #f4f2ff",
  };

  const currentBoxShadow =
    boxShadowStyles[activeSection] ||
    "5px 5px 8px #a8a7a4, -5px -5px 8px #f4f2ee";

  return (
    <motion.button
      onClick={toggleBtn}
      className={animate === "open" ? "btnActive" : ""}
      whileTap={{ scale: 0.95 }}
      variants={variants}
      style={{
        boxShadow: currentBoxShadow.boxShadow,
        backgroundColor: currentBoxShadow.backgroundColor,
        backdropFilter: currentBoxShadow.backdropFilter,
        borderTop: currentBoxShadow.borderTop,
        borderLeft: currentBoxShadow.borderLeft,
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke={activeSection === "LatestProject" ? "black" : "black"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          />
        <motion.path
          strokeWidth="3"
          stroke={activeSection === "LatestProject" ? "black" : "black"}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          />
        <motion.path
          strokeWidth="3"
          stroke={activeSection === "LatestProject" ? "black" : "black"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default Togglebutton;
