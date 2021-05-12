import React, { useState } from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from '../../components/Header/Header';

import envelopeAccepted from '../../assets/img/envelope-accepted.png';
import envelopeRejected from '../../assets/img/envelope-rejected.png';

import './Message.css';

const Message = () => {

  const [inputName, setInputName] = useState("");
  const [errorInputName, setErrorInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");
  const [errorInputEmail, setErrorInputEmail] = useState("");

  const [inputSubject, setInputSubject] = useState("");
  const [errorInputSubject, setErrorInputSubject] = useState("");

  const [inputComment, setInputComment] = useState("");
  const [errorInputComment, setErrorInputComment] = useState("");

  const [lettersCounter, setCounter] = useState(0);

  const [statusForm, setStatusForm] = useState("available");

  function handleSubmit(event) {
    event.preventDefault();

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (inputName == "") {
      setErrorInputName("This field is empty.");
    }
    if (inputEmail == "") {
      setErrorInputEmail("This field is empty.");
    } else if (!emailRegExp.test(inputEmail)) {
      setErrorInputEmail("Format email invalid.");
    }
    if (inputSubject == "") {
      setErrorInputSubject("This field is empty.");
    }
    if (inputComment == "") {
      setErrorInputComment("This field is empty.");
    }

    const emailValid = inputEmail && emailRegExp.test(inputEmail);
    const formValid = inputName && emailValid && inputSubject && inputComment;

    if (formValid) {
      setStatusForm("sending");
      axios({
        method: 'POST',
        url: '/web-portfolio/dist/backend/message.php',
        data: {
          name: inputName,
          email: inputEmail,
          subject: inputSubject,
          comment: inputComment,
        }
        })
        .then(result => {
            if(result.data == 1) {
              setStatusForm("accepted");
            } else {
              setStatusForm("rejected");
            }
        })
        .catch(error => console.log(error));

    }
  }

  function handleInputName(event) {
    setInputName(event.target.value);
    if (errorInputName !== "") {
      setErrorInputName(false);
    }
  }

  function handleInputEmail(event) {

    setInputEmail(event.target.value);
    if (errorInputEmail !== "") {
      setErrorInputEmail(false);
    }
  }

  function handleInputSubject(event) {
    setInputSubject(event.target.value);
    if (errorInputSubject !== "") {
      setErrorInputSubject(false);
    }
  }

  function handleInputComment(event) {

    if (lettersCounter < 200) {
      setInputComment(event.target.value);
    }
    setCounter(event.target.value.length);

    if (errorInputComment !== "") {
      setErrorInputComment(false);
    }
  }

  let mainContent = "";

  switch(statusForm) {
    case "sending": 
                      mainContent = (
                        <div id="loading-message-container" className="d-flex justify-content-center align-items-center">
                          <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      );
                      break;
    case "accepted": 
                      mainContent = (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <div className="alert alert-success message-container mb-5" role="alert">
                            Your message has been sent correctly.<br/>
                            Thank you.
                          </div>
                          <div className="img-container">
                            <img className="envelope" src={envelopeAccepted} alt="envelope"/>
                          </div>
                        </div>
                      );
                      break;
    case "rejected":  
                      mainContent = (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <div className="alert alert-danger message-container mb-5" role="alert">
                            Sorry. We are having technical problems on the page.<br/>
                            Try it again later.
                          </div>
                          <div className="img-container">
                            <img className="envelope" src={envelopeRejected} alt="envelope"/>
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
                      `form-control ${errorInputName ? "is-invalid" : ""}`
                    } 
                    id="name-field" 
                    placeholder="Name"
                    onChange={handleInputName}
                    />
                    <label for="name-field" className="form-label">
                      Name<span className="text-danger">*</span>
                    </label>
                    <div className="invalid-feedback">
                      {errorInputName}
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                    type="email" 
                    className={
                      `form-control ${errorInputEmail ? "is-invalid" : ""}`
                    } 
                    id="email-field" 
                    placeholder="Email"
                    onChange={handleInputEmail}
                    />
                    <label for="email-field" className="form-label">
                      Email<span className="text-danger">*</span>
                    </label>
                    <div className="invalid-feedback">
                      {errorInputEmail}
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                    type="text" 
                    className={
                      `form-control ${errorInputSubject ? "is-invalid" : ""}`
                    } 
                    id="subject-field" 
                    placeholder="Subject"
                    onChange={handleInputSubject}
                    />
                    <label for="subject-field" className="form-label">
                      Subject<span className="text-danger">*</span>
                    </label>
                    <div className="invalid-feedback">
                      {errorInputSubject}
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <textarea
                    className={
                      `form-control ${errorInputComment ? "is-invalid" : ""}`
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
                    <p id="letters-counter" className="my-0">{String(lettersCounter) + "/200"}</p>
                    <div className="invalid-feedback">
                      {errorInputComment}
                    </div>
                  </div>
                  <div className="container-fluid d-flex justify-content-evenly mt-4">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-primary">Reset</button>
                  </div>
                  <p className="text-end text-dark my-0 py-1">
                    (<span className="text-danger">*</span>) is required
                  </p>
                </form>
              );
  }

  return (
    <div id="message-container" className="container-fluid px-0 pb-5 border">
      <Header content="Message" />
      <div className="container-fluid rounded mt-5 px-0">
        {mainContent}
      </div>
    </div>
  );
};

export default Message;