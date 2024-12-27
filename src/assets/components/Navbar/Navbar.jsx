import "react";
import logo from "/images/blacklogo.jpeg"
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-white  py-lg-4 p-1">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width={80} alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                Navbar
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className={`${styles.offcanvas_body} offcanvas-body gap-2 `}>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                                <li className="nav-item">




                                    <Link to="/" className={`${styles.nav_link} nav-link active`} aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link `} href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link `} href="#">
                                        Portfolio
                                    </a>
                                </li>
                            </ul>
                            <br />
                            <form className="d-flex justify-content-center align-item-center me-4" role="search">
                                <Link to="/contact" className={`${styles.contact_btn} btn btn-outline-success`} type="submit"> CONTACT US</Link>

                            </form>

                            <li className="nav-item list-unstyled mt-1 ">
                                <a href="#">
                                    <i className="bi fs-4 bi-search"></i>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Socail media links */}
            <div className="bg-body-secondary">
                <div className="container">
                    <div className="d-flex justify-content-end align-items-center py-2 gap-3">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;
