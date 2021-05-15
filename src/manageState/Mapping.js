import { loadProjects, changeName, errorName, changeEmail, errorEmail, changeSubject, errorSubject, changeComment, errorComment,
 changeCounter, changeStatus } from './Creators.js';

const mapStateToProps = (state) => {
  return {
    projectsSection: {
      loading: state.projects.loading,
      data: state.projects.data
    },
    messageSection: {
      status: state.message.status,
      name: state.message.name,
      errorName: state.message.errorName,
      email: state.message.email,
      errorEmail: state.message.errorEmail,
      subject: state.message.subject,
      errorSubject: state.message.errorSubject,
      comment: state.message.comment,
      errorComment: state.message.errorComment,
      counter: state.message.counter
    }
  };
};

const mapDispatchToProps = { 
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

export { mapStateToProps, mapDispatchToProps };