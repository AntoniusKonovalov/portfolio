import { animate } from "framer-motion";
import "./contactMe.scss";

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}


function ContactMe() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
            <h2>Mail</h2>
            <span>AntoniusKonovalov@gmail.com</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+972-502 1010 25</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
            <input type="text" required placeholder="Name" />
            <input type="email" required placeholder="Email" />
            <textarea rows={8} placeholder="Message" />
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
