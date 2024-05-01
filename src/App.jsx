import { useState, useEffect } from "react";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import LatestProject from "./components/latestProject/LatestProject";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.1,
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

      <section>Portfolio</section>
      <section id="Contact">Contact</section>
      <section>Hero</section>
    </div>
  );
};

export default App;
