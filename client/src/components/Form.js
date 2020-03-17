import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
//import Modal from 'react-modal';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import API from "../utils/API";

function form(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [show, setShow] = useState(false);
  const [logged, setLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signOut = () => {
    API.logOut().then(data => {
      console.log(data);
    });
    window.location.reload();
  };

  const signIn = () => {
    API.logIn({ username: username, password: password }).then(user => {
      console.log("user object.....L " + JSON.stringify(user));
      console.log("staaaaaaaaaaaaatus teeeeeeeeextL=: " + user.statusText);
      setLogged(true);
      setShow(false);
      console.log(currentUser);
      props.changeCurrentUser({
        username: user.data.user.local.username,
        id: user.data.user._id
      });
      // alert("You're signed in!");
    });
  };

  const cancel = () => {
    setShow(false);
  };

  const signUp = () => {
    setShow(false);
    API.signUp({ username: username, password: password }).then(user => {
      if (user.data.error) {
        console.log(user.data.error);
        alert(user.data.error);
      } else {
        console.log("user object.....L " + JSON.stringify(user));
        console.log("staaaaaaaaaaaaatus teeeeeeeeextL=: " + user.statusText);

        //setLogged(true);
        //setShow(false)
        console.log(currentUser);
        alert("You're signed up");
      }
      //props.changeCurrentUser({username:user.data.user.local.username,id:user.data.user._id})
    });
  };

  const handleInputChange = e => {
    e.target.name === "username"
      ? setUsername(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div id="modal-test">
      {logged ? (
        <button type="button" class="btn btn-warning" onClick={signOut}>
          Sign Out
        </button>
      ) : (
        <button type="button" class="btn btn-secondary" onClick={handleShow}>
          Sign in
        </button>
      )}
      {/* <button button type="button" class="btn btn-link" onClick={signUp}>
        Signup
      </button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                name="username"
                value={username}
                onChange={handleInputChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="form-group form-check d-flex">
            <button
              type="submit"
              className="btn btn-warning mr-auto"
              onClick={signIn}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn btn-link ml-auto"
              onClick={signUp}
            >
              Signup
            </button>
            <button
              type="submit"
              className="btn btn-secondary ml-auto"
              onClick={cancel}
            >
              Cancel
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <br></br>
      {/* <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img src="..." className="rounded mr-2" alt="..." />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div> */}
    </div>
  );
}

export default form;
