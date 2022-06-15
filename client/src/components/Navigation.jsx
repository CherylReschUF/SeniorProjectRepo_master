import React from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";
import store from "../store";
import "./style.css"


//function Navigation() {
const Navigation = ({user}) => {
  console.log("Nav user:", user)
const logout = (event) => {
  // Logout user
  store.dispatch(logoutUser());
  // Redirect to login
  window.location.href = "./loginsignup";
}
  return (
    <div>
      <nav className="navbar">
        
        {/* Navigation Bar: Cross-Site */}
        <div className="navbar-collapse collapse">
          <ul className="nav1 navbar-nav ul">
              {/* Home */}
              <li
              >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {/* Input Validation */}
              <li
              >
                <Link className="nav-link" to="/inputvalidation">
                  Input Validation
                </Link>
              </li>

              {/* Cross-Site Scripting */}
              <li
              >
                <Link className="nav-link" to="/crosssite">
                  Cross-Site Scripting
                </Link>
              </li>

              {/* Buffer overflow */}
              <li
              >
                <Link className="nav-link" to="/bufferoverflow">
                  Buffer overflow
                </Link>
              </li>

              {/* CIS Controls */}
              <li
              >
                <Link className="nav-link" to="/ciscontrols">
                  CIS Controls
                </Link>
              </li>


              {/* LoginSignUp */}
              <li
              >
                <Link className="nav-link" to="/loginsignup">
                  Login/Sign-Up
                </Link>
              </li>

              {/* Exercises */}
              <li
              >
                <Link className="nav-link" to="/modulequiz">
                  Module Exercises
                </Link>
              </li>
              {(user !== null) ? (
                <button
                  className="button-logout"
                  onClick={(event) => logout(event)}
                  >
                    Logout
                </button>
                ) : (<li
                      >
                        <Link className="nav-link" to="/loginsignup">
                          Login/Sign-Up
                        </Link>
                      </li>)}
          </ul>
        </div>

        <div className="navbar-brand">
          <Link className="navbar-brand" to="/">
            {/* Gator icon */}
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="gator_logo.png"
              alt=""
              width="100"
              height="100"
            />
           </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;