import axios from "axios";
import {
    LOAD_QUESTIONS
} from "./types"

//Get the Questions
export const loadQuestions = () => {//dispatch => {
    console.log("in questionAction")
    axios
      .get("/api/questions/get")
      .then(res => {
          console.log("res of Questions", res.data);
          //localStorage.setItem("questions", res.data);
          sessionStorage.setItem("questions", res.data);
          console.log(sessionStorage.getItem("questions"))
          //dispatch({type: LOAD_QUESTIONS, payload: res.data});
      })
      .catch(//err =>
        console.log("fail in questions get axios")
        //.alert("Something went wrong in loadQuestion. Please try again.")
        // FIXME -> have error on err.response
        // must have response to return from users.js
        /*
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        */
      );
  };