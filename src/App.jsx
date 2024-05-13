import { useState, useEffect } from "react";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import LatestProject from "./components/latestProject/LatestProject";
import ContactMe from "./components/contactMe/contactMe";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.body.classList.remove('services-scrollbar', 'latestProject-scrollbar', 'contact-scrollbar');
  
    switch(activeSection) {
      case 'Services':
        document.body.classList.add('services-scrollbar');
        break;
      case 'LatestProject':
        document.body.classList.add('latestProject-scrollbar');
        break;
      case 'Contact':
        document.body.classList.add('contact-scrollbar');
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
        <Navbar activeSection={activeSection}/>
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section id="LatestProject">
        <LatestProject />
      </section>

      <section id="Contact">
        <ContactMe />
      </section>
    </div>
  );
};

export default App;
