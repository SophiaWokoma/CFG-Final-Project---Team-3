import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Dashboard from "../../Dashboard/Dashboard";
import "./LoginForm.css";

export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const [googleUser, setGoogleUser] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setGoogleUser(userObject);
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "77265509905-erhml85ju970u8qv7gevnrbbo0ednm1p.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("google-sign-in"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  // If we have no user we want to show the login button
  // If we have a user we want to show the logout button
  return (
    <div className="d-flex justify-content-center align-items-center form-container">
      <form onSubmit={submitHandler} className="rounded p-4 p-sm-3 form">
        <div className="form-inner">
          <div className="header">
            <h2>Log In</h2>
            <p>Welcome back ! Please enter your details. </p>
          </div>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="main-form">
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
            </Form.Group>
            <Form.Group className=" mb-3">
              {/* <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              ></input> */}
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                id="email"
                type="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            {/* <div className="form-field mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              ></input>
            </div> */}

            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                aria-describedby="passwordHelpBlock"
                placeholder="Password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
            {/* <div className="form-field mb-3">
              <label htmlFor="password">
                Password
                <a href="/"> Forgot Password ?</a>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              ></input>
            </div> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </div>

          <div className="login-buttons d-grid gap-2">
            {/* <input className="login" type="submit" value="Login" /> */}
            <Button variant="secondary" type="submit">
              Login
            </Button>
            <div id="google-sign-in"></div>
            {/* {googleUser &&(<Dashboard/>) } */}
          </div>
          <div className="login-bottom mt-3">
            <p>
              Don't have an account? <a href="/"> Sign up</a>
            </p>

            <div className="terms-policy">
              By signing up, you confirm that you've read and accepted our
              <a href=""> Terms of Service </a> and
              <a href=""> Privacy Policy </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
