import actions from './Actions.js';

// Projects creator
const loadProjects = (projects) => {
  return {
    type: actions.LOAD_PROJECTS,
    projects
  };
};

// Form creators
const changeName = (newName) => {
  return {
    type: actions.CHANGE_INPUT_NAME,
    newName
  };
};

const errorName = (message) => {
  return {
    type: actions.ERROR_INPUT_NAME,
    message
  };
};

const changeEmail = (newEmail) => {
  return {
    type: actions.CHANGE_INPUT_EMAIL,
    newEmail
  };
};

const errorEmail = (message) => {
  return {
    type: actions.ERROR_INPUT_EMAIL,
    message
  };
};

const changeSubject = (newSubject) => {
  return {
    type: actions.CHANGE_INPUT_SUBJECT,
    newSubject
  };
};

const errorSubject = (message) => {
  return {
    type: actions.ERROR_INPUT_SUBJECT,
    message
  };
};

const changeComment = (newComment) => {
  return {
    type: actions.CHANGE_INPUT_COMMENT,
    newComment
  };
};

const errorComment = (message) => {
  return {
    type: actions.ERROR_INPUT_COMMENT,
    message
  };
};

const changeCounter = (value) => {
  return {
    type: actions.CHANGE_COUNTER,
    value
  };
};

const changeStatus = (newStatus) => {
  return {
    type: actions.CHANGE_FORM_STATUS,
    newStatus
  };
};

export {
  loadProjects,
  changeName,
  errorName,
  changeEmail,
  errorEmail,
  changeSubject,
  errorSubject,
  changeComment,
  errorComment,
  changeCounter,
  changeStatus
};