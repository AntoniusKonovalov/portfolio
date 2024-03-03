import "./sidebar.scss";
import Links from "./links/Links";
import Togglebutton from "./toggleButton/Togglebutton";
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: { x: "0%" },
        closed: { x: "-100%" },
    };
    
  return (
    <div className="sidebar">
      <div className="bg">
        <Links />
      </div>
      <Togglebutton />
    </div>
  );
};

export default Sidebar;
