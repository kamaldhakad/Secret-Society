import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let user = localStorage.getItem("login-user");
  const [userLogin, setUserLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logoutHandler = () => {
    localStorage.removeItem("login-user");
    navigate("/login");
    setUserLogin(false);
  };

  useEffect(() => {
    if (user) {
      setUserLogin(true);
    } else {
      navigate("/login");
    }
  }, [location]);
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              NFT Gallery
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                {userLogin && (
                  <li className="nav-item">
                    <Link className="nav-link" onClick={() => logoutHandler()}>
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
