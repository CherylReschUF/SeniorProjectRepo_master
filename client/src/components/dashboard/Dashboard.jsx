import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
//import { Link } from 'react-router-dom';

class Dashboard extends Component {
    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.href = '/';
    };
    
  render() {
      const { user } = this.props.auth;
  return (
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="col s12 py-5 center-align">
              <h4>
                Hey there, <b>{user.name.split(" ")[0]}</b>
                <p className="flow-text grey-text text-darken-1">
                  You are logged into VSO at UF's website. Have a great day!
                  {/*<span style={{ fontFamily: "monospace" }}>VSO</span>*/}
                </p>
              </h4>
  
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-outline-primary float-middle"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  
  Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);