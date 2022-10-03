import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/header.css';
export default function Header() {
  return (
    <>
      <header className="top-bar">
        <nav className="container-fluid">
          <section className="row justify-content-between">
            <div className="col-auto">
              <ul className="top-bar__feature-list-left">
                <li>
                  <a href="#">
                    <i className="bi bi-list"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-house"></i>
                  </a>
                </li>
                <li className="search-element">
                  <i className="bi bi-search"></i>
                  <input type="text" className="ps-2" placeholder="Search" />
                </li>
              </ul>
            </div>

            <div className="col-auto">
              <ul className="top-bar__feature-list-right">
                <li>
                  <a href="#">
                    <i className="bi bi-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-graph-up-arrow"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-question-circle"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-bell"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-circle"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
}
