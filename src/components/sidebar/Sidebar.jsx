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

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <div className="toogle-button-container">
        <Togglebutton setOpen={setOpen} open={open} activeSection={activeSection}/>
      </div>
    </motion.div>
  );
};

export default Sidebar;
