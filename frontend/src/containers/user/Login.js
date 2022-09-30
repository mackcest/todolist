import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// inport assets
import agenda from '../../assets/images/agenda.png';
import calender from '../../assets/images/Calendar.png';
import facebook from '../../assets/images/Facebook logo 2019.png';
import google from '../../assets/images/Google.png';
import '../../assets/styles/login.css';

function Login() {
  return (
    <div className="container-fluid login-page">
      <div className="container login-form">
        <div className="row align-center">
          <div className="col container text-center pe-5 calender-element">
            <img className="image-res" src={calender} alt="agenda" />
          </div>

          <div className="col p-5 login-form__body">
            <div className="text-center">
              <img className="pe-3" src={agenda} alt="agenda" />
              <h1 className="text-light d-inline align-middle">TODO LIST</h1>
              <h2 className="text-light text-start pt-5 pb-1">LOGIN</h2>
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
              <button type="submit" className="btn btn-light mb-3 w-100 ">
                Sign In
              </button>
              <div className="text-light">
                <div className="text-end pb-3">
                  <Link to="/forgotPassword">forgot your password?</Link>
                </div>
                <div className="text-center">
                  you don't have an account? <Link to="/signup">SignUp</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
