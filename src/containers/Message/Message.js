import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';

import Header from '../../components/Header/Header';
import envelopeAccepted from '../../assets/img/envelope-accepted.png';
import envelopeRejected from '../../assets/img/envelope-rejected.png';

import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../manageState/Mapping';

import './Message.css';

const Message = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (props.messageSection.name == "") {
      props.setErrorName("This field is empty.");
    }
    if (props.messageSection.email == "") {
      props.setErrorEmail("This field is empty.");
    } else if (!emailRegExp.test(props.messageSection.email)) {
      props.setErrorEmail("Format email invalid.");
    }
    if (props.messageSection.subject == "") {
      props.setErrorSubject("This field is empty.");
    }
    if (props.messageSection.comment == "") {
      props.setErrorComment("This field is empty.");
    }

    const emailValid = props.messageSection.email && 
                        emailRegExp.test(props.messageSection.email);
    const formValid = props.messageSection.name && emailValid 
                      && props.messageSection.subject 
                      && props.messageSection.comment;

    if (formValid) {
      props.changeStatus("sending");
      
      const environment = "production";
      let pathDataFolder = "";

      if (environment == "production") {
        pathDataFolder = "/backend/email/";
      } else {
        pathDataFolder = "/web-portfolio/dist/backend/email/";
      }

      axios({
        method: 'POST',
        url: pathDataFolder + 'message.php',
        data: {
          name: props.messageSection.name,
          email: props.messageSection.email,
          subject: props.messageSection.subject,
          comment: props.messageSection.comment,
        }
        })
        .then(result => {
            if(result.data == "Message has been sent") {
              props.changeStatus("accepted");
            } else {
              props.changeStatus("rejected");
            }
        })
        .catch(error => console.log(error));
    }
  }

  function handleInputName(event) {
    props.changeName(event.target.value);
    if (props.messageSection.errorName !== "") {
      props.setErrorName("");
    }
  }

  function handleInputEmail(event) {
    props.changeEmail(event.target.value);
    if (props.messageSection.errorEmail !== "") {
      props.setErrorEmail("");
    }
  }

  function handleInputSubject(event) {
    props.changeSubject(event.target.value);
    if (props.messageSection.errorSubject !== "") {
      props.setErrorSubject("");
    }
  }

  function handleInputComment(event) {
    if (props.messageSection.counter < 200) {
      props.changeComment(event.target.value);
    }
    props.changeCounter(event.target.value.length);

    if (props.messageSection.errorComment !== "") {
      props.setErrorComment("");
    }
  }

  let mainContent = "";

  switch(props.messageSection.status) {
    case "sending": 
                    mainContent = (
                      <div 
                       id="loading-message-container" 
                       className="
                        d-flex 
                        justify-content-center 
                        align-items-center
                       "
                      >
                        <div 
                         className="spinner-border text-secondary" 
                         role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    );
                    break;
    case "accepted": 
                    mainContent = (
                      <div 
                       className="
                        d-flex 
                        flex-column 
                        justify-content-center 
                        align-items-center
                       "
                      >
                        <div 
                         className="
                          alert 
                          alert-success 
                          message-container
                          mb-5
                         "
                         role="alert"
                        >
                          Your message has been sent correctly.<br/>
                          Thank you.
                        </div>
                        <div className="img-container">
                          <img 
                           className="message-info" 
                           src={envelopeAccepted} 
                           alt="envelope"
                          />
                        </div>
                      </div>
                    );
                    break;
    case "rejected":  
                    mainContent = (
                      <div 
                       className="d-flex 
                        flex-column 
                        justify-content-center 
                        align-items-center
                       "
                      >
                        <div 
                         className="
                          alert 
                          alert-danger 
                          message-container 
                          mb-5
                         " 
                         role="alert"
                        >
                          Sorry. We are having technical problems on the page.<br/>
                          Try it again later.
                        </div>
                        <div className="img-container">
                          <img 
                           className="message-info" 
                           src={envelopeRejected} 
                           alt="wrong sign"
                          />
                        </div>
                      </div>
                    );
                    break;
    default:
            mainContent = (
              <form id="contact-form" onSubmit={handleSubmit} method="POST">
                <h3 className="text-center fs-1 py-3">Contact form</h3>
                <div className="form-floating mb-3">
                  <input
                  type="text"
                  className={
                    `form-control ${props.messageSection.errorName ? "is-invalid" : ""}`
                  } 
                  id="name-field" 
                  placeholder="Name"
                  onChange={handleInputName}
                  />
                  <label for="name-field" className="form-label">
                    Name<span className="text-danger">*</span>
                  </label>
                  <div className="invalid-feedback">
                    {props.messageSection.errorName}
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                  type="email" 
                  className={
                    `form-control ${props.messageSection.errorEmail ? "is-invalid" : ""}`
                  } 
                  id="email-field" 
                  placeholder="Email"
                  onChange={handleInputEmail}
                  />
                  <label for="email-field" className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <div className="invalid-feedback">
                    {props.messageSection.errorEmail}
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                  type="text" 
                  className={
                    `form-control ${props.messageSection.errorSubject ? "is-invalid" : ""}`
                  } 
                  id="subject-field" 
                  placeholder="Subject"
                  onChange={handleInputSubject}
                  />
                  <label for="subject-field" className="form-label">
                    Subject<span className="text-danger">*</span>
                  </label>
                  <div className="invalid-feedback">
                    {props.messageSection.errorSubject}
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                  className={
                    `form-control ${props.messageSection.errorComment ? "is-invalid" : ""}`
                  } 
                  id="comment-field" 
                  placeholder="Leave a comment here"
                  maxLength="200"
                  onChange={handleInputComment}
                  >
                  </textarea>
                  <label for="comment-field" className="form-label">
                    Comment<span className="text-danger">*</span>
                  </label>
                  <div></div>
                  <p 
                   id="letters-counter" 
                   className="my-0"
                  >
                   {String(props.messageSection.counter) + "/200"}
                  </p>
                  <div className="invalid-feedback">
                    {props.messageSection.errorComment}
                  </div>
                </div>
                <div 
                 className="
                  container-fluid 
                  d-flex 
                  justify-content-evenly 
                  mt-4
                 "
                >
                  <button type="submit" className="btn btn-primary">
                   Submit
                  </button>
                  <button type="reset" className="btn btn-primary">
                   Reset
                  </button>
                </div>
                <p className="text-end text-dark my-0 py-1">
                  (<span className="text-danger">*</span>) is required
                </p>
              </form>
            );
  }

  return (
    <div id="message-container" className="container-fluid px-0 pb-5 border">
      <Header content="Message"/>
      <div className="container-fluid rounded mt-5 px-0">
        {mainContent}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps) (Message);