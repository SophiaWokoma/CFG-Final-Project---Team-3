import React, { useState } from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm";
import Dashboard from "../../Dashboard/Dashboard";


// this function just handles the login logic, for the regular sign in so checks the user input against our 'correct-details' which are 
// in the adminUser object
// if user input = details in object then the log in is successful. LoginForm.js contains the layout for the login form-inputs and buttons etc

export default function LoginPage() {
  // object containing user details which we will check the user login details against
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  //   get our user details
  const [user, setUser] = useState({ name: "", email: "" });
  //   catch if user details aren't correct , display a message
  const [error, setError] = useState("");

  //   function that is called when login is attempted
  function Login(details) {
        console.log(details);
        if (details.email === adminUser.email &&
            details.password === adminUser.password) {
            console.log("Logged in");
            setUser({ name: details.name, email: details.email });
        } else {
            console.log("Details do not match");
            setError(
                "We couldn’t find an account matching the username and password you entered. Please check your email and password and try again"
            );
        }
    }
// This is supposed to handle the Log out logic but I am not sure if we need this
  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({ name: "", email: "" });
  // };
  return (
  // this is aconditional which to navigate from the login to dashboard 
    <div className="Login">
      {user.email !== "" ? (
        <Dashboard />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
