import { combineReducers } from 'redux';
import actions from './Actions.js';

// Initial states

const initialSectionProjects = {
  loading: true,
  data: []
};

const initialSectionMessage = {
  status: "available",
  name: "",
  errorName: "",
  email: "",
  errorEmail: "",
  subject: "",
  errorSubject: "",
  comment: "",
  errorComment: "",
  counter: 0
};

// Reducers

const projectsReducer = (state = initialSectionProjects, action) => {
  switch(action.type) {
    case actions.LOAD_PROJECTS:
      return {
        loading: false,
        data: action.projects
      };
    default:
      return state;
  };
};

const messageReducer = (state = initialSectionMessage, action) => {
  switch(action.type) {
    case actions.CHANGE_FORM_STATUS:
      return {
        ...state,
        status: action.newStatus
      };
    case actions.CHANGE_INPUT_NAME:
      return {
        ...state,
        name: action.newName
      };
    case actions.ERROR_INPUT_NAME:
      return {
        ...state,
        errorName: action.message
      };
    case actions.CHANGE_INPUT_EMAIL:
      return {
        ...state,
        email: action.newEmail
      };
    case actions.ERROR_INPUT_EMAIL:
      return {
        ...state,
        errorEmail: action.message
      };
    case actions.CHANGE_INPUT_SUBJECT:
      return {
        ...state,
        subject: action.newSubject
      };
    case actions.ERROR_INPUT_SUBJECT:
      return {
        ...state,
        errorSubject: action.message
      };
    case actions.CHANGE_INPUT_COMMENT:
      return {
        ...state,
        comment: action.newComment
      };
    case actions.ERROR_INPUT_COMMENT:
      return {
        ...state,
        errorComment: action.message
      };
    case actions.CHANGE_COUNTER:
      return {
        ...state,
        counter: action.value
      };
    default:
      return state;
  };
};

// Main reducer
const rootReducer = combineReducers({
  projects: projectsReducer,
  message: messageReducer
});

export default rootReducer;