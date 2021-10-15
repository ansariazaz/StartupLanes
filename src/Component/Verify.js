import { Link,useHistory } from "react-router-dom";
import icon from "../images/back.svg";

const Verify = () => {
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `Profile`; 
    history.push(path);
  }
  return (
    <div className="container2">
    <Link to="/Register"><img src={icon} className="back"/></Link>
      <div className="sub-container">
        <div className="brand2">
          <h1>SL</h1>
          <p>StartupLanes</p>
        </div>
        <div className="code">
        <h1>Code Verification</h1>
        <p>Enter OTP sent to your Email ID/Phone No.</p>
        </div>
        <div className="box-container">
          <div className="box">6</div>
          <div className="box">5</div>
          <div className="box">1</div>
          <div className="box"></div>
        </div>
        <p className="resend">Resend OTP?</p>
        <button type="submit" onClick={routeChange}>Verify</button>
      </div>
    </div>
  );
};

export default Verify;
