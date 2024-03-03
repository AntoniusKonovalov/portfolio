import "./navbar.scss";

function Navbar() {
  return (
  <div className="navbar">
    {/* Sidebar */}
    <div className="wrapper">
        <span>Anton Konovalov</span>
        <div className="social">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/linkedin.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
        </div>
    </div>
    
    </div>);
}

export default Navbar;
