import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faSquareYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const socialIcons = [
  { icon: faFacebookF, name: "facebook", url: "https://www.facebook.com/prosto.fedia/"},
  { icon: faLinkedinIn, name: "linkedin", url: "https://www.linkedin.com/in/antoniuskonovalov/" },
  { icon: faSquareYoutube, name: "youtube", url: "https://www.youtube.com/channel/UCZym5wxM_ZtJl_wjsAX-ZxQ" },
  { icon: faGithub, name: "github", url: "https://github.com/DickYtman" },
];

function Navbar() {
  const [activeStates, setActiveStates] = useState(
    Array(socialIcons.length).fill(false)
  );

  const toggleActive = (index) => {
    setActiveStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
         
          {socialIcons.map((item, index) => (
              <li key={item.name} onClick={() => toggleActive(index)} className={activeStates[index] ? 'btnActive' : 'btnNotActive'}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              </li> 
            ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
