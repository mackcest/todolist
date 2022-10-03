import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/sidebar.css';
export default function SideBar() {
  return (
    <>
      <div>
        <nav className="sidebar">
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <i className="bi bi-inbox icon"></i>
                    <span className="text nav-text ">Inbox</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bi bi-calendar-date icon"></i>
                    <span className="text nav-text">Today</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bi bi-calendar3 icon"></i>
                    <span className="text nav-text">Upcoming</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bi bi-grid icon"></i>
                    <span className="text nav-text">Fillters & Labels</span>
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="bi bi-chevron-right icon"></i>
                    <span className="text nav-text">Projects</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

SideBar.propTypes = {};
