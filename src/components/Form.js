import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Style/style.css";

const Form = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const handleInputChange = () => {
    setIsFormValid(true);
    setNameError("");
    setEmailError("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    const firstName = form.current.elements.user_first.value;
    const lastName = form.current.elements.user_last.value;
    const userPhone = form.current.elements.user_number.value;
    const userEmail = form.current.elements.user_email.value;
    
    if (form.current.checkValidity() && validateName(firstName) && validateName(lastName) && validateEmail(userEmail) && validateName(userPhone)) {
      setIsSubmitting(true);

      emailjs
        .sendForm(
          "service_2wt9xu8",
          "template_fpstpgl",
          form.current,
          "jKH3B5xmLrnHzy3BG"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitMessage("Message sent successfully!");
            form.current.reset();
            setIsFormValid(true);
            setNameError("");
            setEmailError("");
          },
          (error) => {
            console.log(error.text);
            setSubmitMessage("Error sending message. Please try again.");
          }
        )
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      setIsFormValid(false);
      setNameError("Please enter a valid name.");
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="container">
      <div className="text">Contact Me!</div>
      <form ref={form} onSubmit={sendEmail} noValidate>
        <div className="form-row">
          <div className="input-data">
            <input
              type="text"
              name="user_first"
              required
              onChange={handleInputChange}
            />
            <div className="underline"></div>
            <label htmlFor="">First Name</label>
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          </div>

          <div className="input-data">
            <input
              type="text"
              name="user_last"
              required
              onChange={handleInputChange}
            />
            <div className="underline"></div>
            <label htmlFor="">Last Name</label>
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="input-data">
            <input
              type="email"
              name="user_email"
              required
              onChange={handleInputChange}
            />
            <div className="underline"></div>
            <label htmlFor="">Email Address</label>
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          </div>

          <div className="input-data">
            <input
              type="text"
              name="user_number"
              required
              onChange={handleInputChange}
            />
            <div className="underline"></div>
            <label htmlFor="">Phone Number</label>
          </div>
        </div>

        <div className="form-row">
          <div className="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div className="underline"></div>
            <label htmlFor="">Write your message</label>
            <br />
          </div>
        </div>

        <div className="form-row submit-btn">
          <div className="input-data">
            {isSubmitting && <p>Sending...</p>}
            {submitMessage && <p>{submitMessage}</p>}
            <input type="submit" value="Send" disabled={isSubmitting} />
            {!isFormValid && (
              <p style={{ color: "red" }}>Please fill out all required fields.</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;