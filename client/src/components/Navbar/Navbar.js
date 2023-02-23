import React from "react";

import '../../components/Navbar/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border shadow-sm fixed-top ">
        <div className="container-fluid navbar">
            <a className="navbar-brand " href="#"><img
                    src="https://www.roadtocode.org/static/media/logo.d5bf81e700da9d2d0cd9.png" alt="rtc" height="30px"
                    className="ms-5"/><span className="ms-2">Road To Code</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav  mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#coursess">Spaceship</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Internship</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Campus ambassador</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#about-us" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            About us
                        </a>

                    </li>
                    <li className="nav-item profile ">
                        <a href="#" className="nav-link "> <img
                                src="#"
                                height="30px" alt="profile" className="profile-img profile border border-warning ms-3"/><span
                                className="ms-3">Amit Dorle</span></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
