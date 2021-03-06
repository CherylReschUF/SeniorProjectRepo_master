import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      username: "",
      errors: {}
    };
  }

componentWillReceiveProps(nextProps) {
  if (nextProps.auth.isAuthenticated) {
    //this.props.history.push("/crosssite"); // push user to dashboard when they login
    window.location.href = '/';
  }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

// Don't have auto logout feature
componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to home
    if (this.props.auth.isAuthenticated) {
      window.location.href = '/';
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();

const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      username: this.state.username
    };

    this.props.registerUser(newUser);//, this.props.history); 
  };

render() {
    const { errors } = this.state;
    
return (
      <div className="container" style={{textAlign: "center"}}>
        <div style={{ marginTop: "4rem" }} className="column">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register below</b>
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/loginsignup">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col" style={{ paddingLeft: "152.250px" }}>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">First and Last Name</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12" style={{ paddingLeft: "60.250px" }}>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12" style={{ paddingLeft: "276.5px" }}>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password(numbers and letters required)</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12" style={{ paddingLeft: "141.175px" }}>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div className="input-field col s12" style={{ paddingLeft: "90.250px" }}>
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="username"
                  className={classnames("", {
                    invalid: errors.username
                  })}
                />
                <label htmlFor="username">UserName</label>
                <span className="red-text">{errors.username}</span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-outline-primary float-middle"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);