import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/styles/sidebar.css';
export default function SideBar(props) {
  const [isChevronDown, setIsChevronDown] = useState();
  return (
    <>
      <div>
        {props.name && (
          <nav className="sidebar">
            <div className="menu-bar">
              <div className="menu">
                <ul className="menu-links">
                  <li className="nav-link">
                    <a href="#">
                      <span>
                        <i className="bi bi-inbox icon"></i>
                      </span>
                      <span className="text nav-text ">Inbox</span>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="#">
                      <span>
                        <i className="bi bi-calendar-date icon"></i>
                      </span>
                      <span className="text nav-text">Today</span>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="#">
                      <span>
                        <i className="bi bi-calendar3 icon"></i>
                      </span>
                      <span className="text nav-text">Upcoming</span>
                    </a>
                  </li>
                  <li className="nav-link">
                    <a href="#">
                      <span>
                        <i className="bi bi-grid icon"></i>
                      </span>
                      <span className="text nav-text">Fillters & Labels</span>
                    </a>
                  </li>
                  <li
                    className="nav-link"
                    onClick={() => {
                      setIsChevronDown(!isChevronDown);
                    }}
                  >
                    <a href="#">
                      <span>{isChevronDown ? <i className="bi bi-chevron-down icon"></i> : <i className="bi bi-chevron-right icon"></i>}</span>
                      <span className="text nav-text">Projects</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
    </>
  );
}

SideBar.propTypes = {};
