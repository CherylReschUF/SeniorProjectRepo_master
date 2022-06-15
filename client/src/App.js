import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navigation, Home, CrossSite, InputValidation, BufferOverflow, CISControls, LoginSignUp, ModuleQuiz, Results } from './components'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/Register";
import { useEffect } from "react";
//import PrivateRoute from "./components/private-route/PrivateRoute";
//import Dashboard from "./components/dashboard/Dashboard";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./loginsignup";
  }
}


function App() {
  const [user, setUser] = useState();
  const [quizKey, setQuizKey] = useState(1);
  useEffect(() => {
    // get user from session storage
    // if user check timestamp
    console.log(store.getState().auth.user.name)
    try {
      setUser(store.getState().auth.user);
    } catch {
      //console.log(this.props.auth);
      console.log("no user");
      setUser(null);
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navigation user={user}/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/crosssite" exact element={<CrossSite />} />
            <Route path="/inputvalidation" exact element={<InputValidation />} />
            <Route path="/bufferoverflow" exact element={<BufferOverflow />} />
            <Route path="/ciscontrols" exact element={<CISControls />} />
            <Route path="/loginsignup" exact element={<LoginSignUp />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/results" exact element={<Results />}/>
            <React.Fragment key={quizKey}>
              <Route exact path="/modulequiz" element={<ModuleQuiz// key={quizKey}
              reset={() => setQuizKey((prevState) => prevState + 1)}
              user={user} />} />
            </React.Fragment>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
