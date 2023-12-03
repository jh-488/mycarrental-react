import React, { useState } from "react";
import "./Contact.css";
import Back from "../back/Back";
import banner from "/images/contact-page/contact-banner.webp";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const Contact = () => {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Display the feedback message for a few seconds
    useEffect(() => {
        setTimeout(() => {
        setIsFormSubmitted(false)
        }, 2900);
    }, [isFormSubmitted])

    return (
        <>
            <section className="contact">
                <Back name="Contact & Support" title="How can we help ?" cover={banner}/>
                <div className="container">
                    <h4>Your email address will not be published. Required fields are marked with <span>*</span></h4>
                    <ContactForm setIsFormSubmitted={setIsFormSubmitted}/>
                </div>
                <div className="form-feedback">
                    {isFormSubmitted ? <div className="feedback-message">Your message was sent!!</div> : ""}
                </div>
            </section>
        </>
    );
}

export default Contact;