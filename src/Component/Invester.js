import React from "react";
import img17 from "../images/bars.svg";
import img18 from "../images/list.png";
import img19 from "../images/zakir.jpeg";
import img20 from "../images/ladki.png";
import img21 from "../images/rishab.jpeg";
import img22 from "../images/shreyas.jpeg";
import down from "../images/down.svg";

function Invester() {
  
  return (
    <div className="container5">
      <div className="wrapper">
        <div className="head">
          <div>
            <img src={img17} className="icons" />
          </div>
          <div className="invest">Investers</div>
          <div>
            <img src={img18} className="icons" />
          </div>
        </div>
        <div class="google">
          <input
            type="text"
            placeholder="Search Investers"
            className="search"
          />
        </div>
        <div className="invester1">
          <div className="card">
            <div className="pic-con">
              <img src={img19} className="pic" />
            </div>
            <div className="about-pic">
              <h3>Rahul Mheta</h3>
              <p>New Delhi, India</p>
              <p>50k-100k</p>
              <div className="down-icon">
                <p>Hello Entrepreneurs.I am Rahul</p>
                <img src={down} className="down"/>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pic-con">
              <img src={img21} className="pic" />
            </div>
            <div className="about-pic">
              <h3>Ronny Devid</h3>
              <p>NYC</p>
              <p>300k-500k</p>
              <div className="down-icon">
                <p>Hello Entrepreneurs.I am Rohan</p>
                <img src={down} className="down"/>
              </div>
            </div>
          </div>
          <div className="card-fe">
            <div className="pic-con">
              <img src={img20} className="pic" />
            </div>
            <div className="about-pic">
              <div>
                <h3>Donna Polson</h3>
                <p>Mumbai, Maharastra</p>
                <p>300k-500k</p>
              </div>
              <div>
                <p>
                  Hello Entrepreneurs.I am Donna Palson,CEO of travel
                  industries.I am looking to invest a sum of my money in real
                  estate bussiness.
                </p>
                <div className="btn">
                <p>Connect</p>
                <p>View Profile</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pic-con">
              <img src={img22} className="pic" />
            </div>
            <div className="about-pic">
              <h3>Adastsh Khan</h3>
              <p>New Delhi, India</p>
              <p>700k-900k</p>
              <div className="down-icon">
                <p>Hello Entrepreneurs.I am Adashtsh</p>
                <img src={down} className="down"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invester;
