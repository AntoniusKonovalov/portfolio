import "./sidebar.scss";
import Links from "./links/Links";
import Togglebutton from "./toggleButton/Togglebutton";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1400px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  const styles = {
    Homepage: {
      backgroundColor: "#f4f2ee",
      boxShadow: "10px 10px 30px #bebebe, -10px -10px 30px #ffffff",
    },
    Services: {
      backgroundColor: "#E1E3E9",
      // background: "linear-gradient(145deg, #fdfdfd, #c7cad6)",
      boxShadow: "10px 10px 30px #bebebe, -10px -10px 30px #ffffff",
    },
    LatestProject: {
      // backgroundColor: "rgba(255, 255, 255, 0.5)",
      background: "linear-gradient(145deg, #fdfdfd, #c7cad6)",
    },
    Contact: {
      backgroundColor: "#F4F2FF",
    },
  };

  const currentStyles = styles[activeSection] || {
    stroke: "black",
    boxShadow: "5px 5px 8px #c2c2c2, -5px -5px 8px #f4f2ee",
    backgroundColor: "#F4F2EE",
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div
        className="bg"
        style={{
          backgroundColor: currentStyles.backgroundColor,
          boxShadow: currentStyles.boxShadow,
          background: currentStyles.background,
        }}
        variants={variants}
      >
        <Links />
      </motion.div>
      <div className="toogle-button-container">
        <Togglebutton
          setOpen={setOpen}
          open={open}
          activeSection={activeSection}
        />
      </div>
    </motion.div>
  );
};

export default Sidebar;
