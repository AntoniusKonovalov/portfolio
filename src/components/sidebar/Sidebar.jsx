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
    clipPath: "circle(20px at 50px 50px)",
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
      backdropFilter: "none",
      background: "#f4f2ee",
      color: "black",
      boxShadow: "10px 10px 30px #bebebe, -10px -10px 30px #ffffff",
    },
    Services: {
      backdropFilter: "blur(1.5rem)",
      boxShadow: "8px 8px 12px #c7c8cc, -8px -8px 12px #ffffff",
      background: "linear-gradient(145deg, #fdfdfd8f, #c7cad66f)",
      color: "rgb(50, 50, 50)",
    },
    LatestProject: {
      backdropFilter: "blur(.5rem)",
      background: "linear-gradient(225deg, rgba(68, 94, 70, 0.34), rgba(19, 21, 25, 0.384))",
      color: "white",
      boxShadow: "none",
    },
    Contact: {
      backdropFilter: "none",
      background: "#f4f2ee",
      color: "black",
      boxShadow: "10px 10px 30px #bebebe, -10px -10px 30px #ffffff",
    },
  };


  const currentStyles = styles[activeSection] || {};

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div
        className="bg"
        style={{
          backdropFilter: currentStyles.backdropFilter,
          background: currentStyles.background,
          color: currentStyles.color,
          boxShadow: currentStyles.boxShadow,
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
