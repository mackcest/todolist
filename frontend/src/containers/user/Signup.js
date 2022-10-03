import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import agenda from '../../assets/images/agenda.png';
import calender from '../../assets/images/Calendar.png';
import facebook from '../../assets/images/Facebook logo 2019.png';
import google from '../../assets/images/Google.png';
import '../../assets/styles/login.css';

function Signup() {
  return (
    <div className="login-page container-fluid">
      <div className="login-form container">
        <div className="row align-center">
          <div className="col container calender-element text-center pe-5">
            <img className="image-res" src={calender} alt="agenda" />
          </div>

          <div className="col  login-form__body p-5">
            <div className="text-center ">
              <img className="pe-3 " src={agenda} alt="agenda " />
              <h1 className="text-light d-inline align-middle">TODO LIST</h1>
              <h2 className="text-light text-start pt-5 pb-1">SIGN UP</h2>
            </div>
            <form>
              <div className="mb-3 mt-3">
                <button type="button" className="btn btn-light w-100 text-start pe-1">
                  <img src={google} alt="agenda" className=" me-2 " style={{ width: '30px', heigh: '30px' }} />
                  Continue with google
                </button>
              </div>
              <div className="mb-3 mt-3">
                <button type="button" className="btn btn-light w-100 text-start pe-1">
                  <img src={facebook} alt="agenda" className="me-2" style={{ width: '30px', heigh: '30px' }} />
                  Continue with facebook
                </button>
              </div>
              <hr className="text-light" />
              <div className="mb-3 mt-3">
                <input type="email" className="form-control" id="email" placeholder="Email" name="email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="pwd" placeholder="Password" name="pswd" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" id="pwd" placeholder="Confirm Password" name="pswd" />
              </div>
              <button type="submit" className="btn btn-light mb-3 w-100 ">
                Sign up
              </button>
              <div className="text-light">
                <div className="text-end pb-3">
                  <Link to="/forgotPassword">forgot your password?</Link>
                </div>
                <div className="text-center">
                  you don't have an account? <Link to="/">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
