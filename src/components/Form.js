import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import "../Style/style.css";

const Form = () => {
  const form = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
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
    setPhoneError("");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = form.current.elements.user_first.value;
    const lastName = form.current.elements.user_last.value;
    const userPhone = form.current.elements.user_number.value;
    const userEmail = form.current.elements.user_email.value;

    if (
      form.current.checkValidity() &&
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(userEmail) &&
      validateName(userPhone)
    ) {
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
            setPhoneError("");
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
      setPhoneError("Please enter a valid phone number.");
    }
  };

  return (
    <div className="Skills">
      <h1>Contact me!</h1>
      <p>Form more information you can contact me by filling the form. Or send me an email at:</p>
      <ul className="Contact-info">
        <li><a href="#"><MdOutlineEmail />&nbsp;&nbsp;<span>Email:&nbsp;&nbsp;</span>sami.wazni@edu.turkuamk.fi</a></li>
        <li><a href="tel:+358449899939"><MdOutlinePhoneEnabled />&nbsp;&nbsp;<span>Phone:&nbsp;&nbsp;</span>+358 44 9899 939</a></li>
        <li><a href="https://github.com/samiwazni"><IoLogoGithub />&nbsp;&nbsp;<span>GitHub:&nbsp;&nbsp;</span>github.com/samiwazni</a></li>
        <li><a href="https://www.linkedin.com/in/sami-wazni-91b333207/"><CiLinkedin />&nbsp;&nbsp;<span>LinkedIn:&nbsp;&nbsp;</span>Sami Wazni</a></li>
      </ul>
      <div className="Form-Container">
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
              {nameError && <p style={{ color: "red", margin: "-5px 0 0 0" }}>{nameError}</p>}
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
              {nameError && <p style={{ color: "red", margin: "-5px 0 0 0" }}>{nameError}</p>}
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
              {emailError && <p style={{ color: "red", margin: "-5px 0 0 0" }}>{emailError}</p>}
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
              {phoneError && <p style={{ color: "red", margin: "-5px 0 0 0" }}>{phoneError}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required name="message"></textarea>
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
                <p style={{ color: "red" }}>
                  Please fill out all required fields.
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;