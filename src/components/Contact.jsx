import React from "react";
import { useRef } from "react";
import "../styles/contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hzj044j",
        "template_5u5se6a",
        form.current,
        "Yb_3VluH6oQH7AGkA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h3>Contact us for a free estimate</h3>
      <div className="contact-line">
        <FaPhoneAlt className="contact-icons" /> <p>(360) 857-0748</p>
      </div>
      <div className="contact-line">
        <FaLocationArrow className="contact-icons" />
        <p>Port Orchard, WA</p>
      </div>
      <div className="contact-line">
        <FaClock className="contact-icons" />{" "}
        <p>
          Mon - Sat 7am to 5pm <br />
          Sunday Closed{" "}
        </p>
      </div>
      <div>
        <h5>Or send us a message</h5>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            required
            className="form-input"
          />
          <input
            type="text"
            placeholder="Email"
            name="user_email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            cols="15"
            rows="5"
            placeholder="Message"
            className="form-input"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
