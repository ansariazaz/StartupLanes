import React from "react";
import img1 from "../images/fb.svg";
import img2 from "../images/google.svg";
import img3 from "../images/twitter.svg";
import img4 from "../images/envelope.svg";
import img5 from "../images/key.svg";
import img6 from "../images/grad.jpg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `Verify`; 
    history.push(path);
  }
  return (
    <div className="background">
      <div className="grad">
        <img src={img6} alt="fb" className="img6" />
      </div>
      <div>
        <div className="bg">
          <div className="bg1"></div>
          <div className="bg2"></div>
        </div>
        <div className="main-container">
          <div className="brand">
            <h1>SL</h1>
            <p>StartupLanes</p>
          </div>
          <div className="container1">
            <h3>Login</h3>
            <div className="input-icon">
              <form>
                <label>
                  <img src={img4} alt="email" className="img4" />
                  <input
                    type="text"
                    className="text"
                    placeholder="Email Address/Phone No."
                  />
                </label>
              </form>
            </div>
            <div className="input-icon">
              <form>
                <label>
                <img src={img5} alt="key" className="img5" />
                  <input type="text" className="text" placeholder="Password" />
                </label>
              </form>
            </div>
            <div className="input-icon">
              <form>
                <label>
                  <img src={img5} alt="key" className="img5" />
                  <input
                    type="text"
                    className="text"
                    placeholder="Confirm Password"
                  />
                </label>
              </form>
            </div>
            <div>
          <input type="checkbox" id="agree" className="checkbox" />
          <label>Agree to terms of services and privacy</label>
        </div>
           <button type="submit" onClick={routeChange}>Register</button>
            <h4>OR</h4>
            <p>Register with social accounts</p>
            <div>
              <img src={img1} alt="fb" className="img1" />
              <img src={img2} alt="google" className="img2" />
              <img src={img3} alt="twitter" className="img3" />
            </div>
          </div>
          <div className="member">
            <p>
              Already have an account?
              <span className="register">
                <Link to="/">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
