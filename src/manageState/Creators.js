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

const setErrorName = (message) => {
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

const setErrorEmail = (message) => {
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

const setErrorSubject = (message) => {
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

const setErrorComment = (message) => {
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
  setErrorName,
  changeEmail,
  setErrorEmail,
  changeSubject,
  setErrorSubject,
  changeComment,
  setErrorComment,
  changeCounter,
  changeStatus
};