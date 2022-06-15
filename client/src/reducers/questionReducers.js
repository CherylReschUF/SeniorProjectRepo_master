import {
    LOAD_QUESTIONS
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {
  isLoaded: false,
  questions: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOAD_QUESTIONS:
            return {
                ...state,
                isLoaded: !isEmpty(action.payload),
                questions: action.payload
        }
        default:
            return state;
    }
}