import React from "react";
import "./Bluebanner.css";
import { useForm, ValidationError } from "@formspree/react";
/* Formspree is a form-backend and API and email service. I am using it here for 
the email suscription*/

function Bluebanner() {
  const [state, handleSubmit] =
    useForm("mpznoknr"); /* 'mpznoknr is simply the code which connects 
  this function, to Formspree to my personal email.*/

  return (
    <div className="bluebanner">
      <div className="bluebanner_text">
        <h3 className="bluebanner-heading">JOIN THE NEWSLETTER FAMILY!</h3>
        <p className="bluebanner-para">
          Join our newsletter family to recieve resources on maximising the
          benefits of working remote. Get our suggestions on the best public
          co-working spaces around the globe. Most imporantly, get frequent
          updates on the progressions on lapstop and have your say!
        </p>
      </div>
      <form method="POST" onSubmit={handleSubmit} className="contactform">
        <label id="name-label" htmlFor="name">
          Name:
        </label>
        <input id="name" type="text" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label id="email-label" htmlFor="email">
          Email:
        </label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          Sign up
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
    /*Function works, a pop alert confirming this is needed.*/
  );
}

export default Bluebanner;
