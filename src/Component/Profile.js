import React from "react";
import img7 from "../images/rocket.svg";
import img8 from "../images/hand.svg";
import img9 from "../images/services.svg";
import img10 from "../images/calender.svg";
import img11 from "../images/chat.svg";
import img12 from "../images/chart.svg";
import img13 from "../images/blog.svg";
import img14 from "../images/handshake.svg";
import img15 from "../images/info.svg";
import img16 from "../images/phone.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container4">
      <div className="profile">
        <div className="dp">
      <div className="profilepic"></div>
      <span>rayanmalhoitra@gmail.com</span>
      </div>
      <h3>70% Profile Completed</h3>
      <div className="myProgress">
        <div className="myBar"></div>
      </div>
      <ul>
        <li>
          <img src={img7} className="icons" />
          <Link>Entrepreneurs</Link>
        </li>
        <li>
          <img src={img8} className="icons" />
          <Link to="/Invester" style={{color:"green"}}>Investers</Link>
        </li>
        <li>
          <img src={img9} className="icons" />
          <Link>Our Services</Link>
        </li>
        <li>
          <img src={img10} className="icons" />
          <Link>Events</Link>
        </li>
        <li>
          <img src={img11} className="icons" />
          <Link>Chat</Link>
        </li>
        <li>
          <img src={img12} className="icons" />
          <Link>Analytic</Link>
        </li>
        <li>
          <img src={img13} className="icons" />
          <Link>Blogs</Link>
        </li>
        <li>
          <img src={img14} className="icons" />
          <Link>Join Us</Link>
        </li>
        <li>
          <img src={img15} className="icons" />
          <Link>About Us</Link>
        </li>
        <li>
          <img src={img16} className="icons" />
          <Link>Contact Us</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default About;
