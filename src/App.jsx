import { useState, useEffect } from "react";
import "./app.scss";
import "./components/aboutMe/aboutMe.scss";

import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/servicess/Services";
import LatestProject from "./components/latestProject/LatestProject";
import ContactMe from "./components/contactMe/contactMe";
import AboutMe from "./components/aboutMe/aboutMe";

const App = () => {
  const [activeSection, setActiveSection] = useState("");


  useEffect(() => {
    document.body.classList.remove(
      "services-scrollbar",
      "latestProject-scrollbar",
      "contact-scrollbar"
    );

    switch (activeSection) {
      case "Services":
        document.body.classList.add("services-scrollbar");
        break;
      case "LatestProject":
        document.body.classList.add("latestProject-scrollbar");
        break;
      case "Contact":
        document.body.classList.add("contact-scrollbar");
        break;
      default:
        break;
    }
  }, [activeSection]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <section id="Homepage">
        <Navbar activeSection={activeSection} />
        <Hero />
      </section>
      <section id="Services">
        <Services type="services" />
      </section>
      <section id="LatestProject">
        <LatestProject />
      </section>
      <section id="Contact" style={{ position: 'relative' }}>
        <ContactMe />
        <AboutMe />
      </section>
    </div>
  );
};

export default App;
