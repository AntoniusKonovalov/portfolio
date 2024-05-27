import { useState } from "react";
import { motion } from "framer-motion";
import "./aboutMe.scss";
import pdfFile from "../../../public/Anton-Konovalov-Web-Developer-and-SEO-specialist.pdf";
import PdfViewer from "../pdfViewer/PdfViewer";
import { useMediaQuery } from "usehooks-ts";


const AboutMe = () => {
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");


  const toggleAboutMe = () => {
    setIsAboutMeVisible(!isAboutMeVisible);
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <motion.div
      className="about-me-container"
      initial={{ y: "95%" }}
      // whileInView={{ y: isAboutMeVisible ? 0 : isMobile ? "104.5%" : "100.5%" }}
      animate={{ y: isAboutMeVisible ? 0 : "25%" }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      <motion.button
        className={`about-me-btn ${isButtonClicked ? "clicked" : ""}`}
        onClick={toggleAboutMe}
      >
        My Resume
        <span className={`arrow ${isButtonClicked ? "down" : "up"}`}></span>
      </motion.button>

      <motion.div
        className="about-me-card"
      >
        <div className="pdfFile">
          <PdfViewer pdf={pdfFile} />
        </div>

      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
