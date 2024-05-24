import { motion, useCycle } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

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

const Togglebutton = ({ setOpen, activeSection }) => {
  const [animate, cycleAnimate] = useCycle("closed", "open");
  const isMobile = useMediaQuery("(max-width: 768px)");


  const toggleBtn = () => {
    setOpen((prev) => !prev);
    cycleAnimate();
  };

  const styleBtnActive = {
    Homepage: {
      backdropFilter: "none",
      boxShadow: "5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff",
      background: "linear-gradient(145deg, #dcdad6, #ffffff)",
    },
    Services: {
      backdropFilter: "none",
      boxShadow: "-5px -5px 10px #dedee0, 5px 5px 10px #ffffff",
      background: "linear-gradient(145deg, #fdfdfd8f, #c7cad66f)",
    },
    LatestProject: {
      backdropFilter: "blur(5px)",
      boxShadow: "5px 5px 10px #352c22b3, -5px -5px 10px #3f3429af",
      background: "linear-gradient(225deg, #3f3429a7, #44382c7b)",
    },
    Contact: {
      backdropFilter: "none",
      boxShadow: "5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff",
      background: "linear-gradient(145deg, #dcdad6, #ffffff)",
    },
  };

  const currentActiveBtn = styleBtnActive[activeSection] || {};

  const buttonStyles = {
    Homepage: {
      backdropFilter: "none",
      boxShadow: isMobile ? "3px 3px 7px #cfceca, -3px -3px 7px #f3ede1" : "5px 5px 10px #cfceca, -5px -5px 10px #f3ede1",
      background: "linear-gradient(145deg, #ffffff, #dcdad6)",
    },
    Services: {
      backdropFilter: "none",
      boxShadow: isMobile ? "3px 3px 7px #d3d3d4, -3px -3px 7px #ffffff" : "5px 5px 10px #d3d3d4, -5px -5px 10px #ffffff",
      background: "linear-gradient(145deg, #ffffff, #dfdfe0)",
    },
    LatestProject: {
      backdropFilter: "blur(5px)",
      boxShadow: isMobile ? "3px 3px 7px #2e231f, -3px -3px 7px #222e1dab" : "5px 5px 10px #2e231f, -5px -5px 10px #563529",
      background: "linear-gradient(225deg, #3f2a1b4d, #4b32205f)",
    },
    Contact: {
      backdropFilter: "none",
      boxShadow: isMobile ? "3px 3px 7px #cfceca, -3px -3px 7px #f3ede1" : "5px 5px 10px #cfceca, -5px -5px 10px #f3ede1",
      background: "linear-gradient(145deg, #ffffff, #dcdad6)",
    },
  };

  const currentNotActiveBtn =
    buttonStyles[activeSection] || {};

  return (
    <motion.button
      onClick={toggleBtn}
      whileTap={{ scale: 0.95 }}
      variants={variants}
      animate={{
        boxShadow:
          animate === "open"
            ? currentActiveBtn.boxShadow
            : currentNotActiveBtn.boxShadow,
        background:
          animate === "open"
            ? currentActiveBtn.background
            : currentNotActiveBtn.background,
        backdropFilter:
          animate === "open"
            ? currentActiveBtn.backdropFilter
            : currentNotActiveBtn.backdropFilter,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <svg width={isMobile ? "19" : "23"} height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke={activeSection === "LatestProject" ? "#9f6418" : "black"}
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke={activeSection === "LatestProject" ? "#9f6418" : "black"}
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke={activeSection === "LatestProject" ? "#9f6418" : "black"}
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
