import React from "react";
import "./Contact.css";
import Back from "../back/Back";
import banner from "/images/contact-page/contact-banner.jpg";

const Contact = () => {
    return (
        <>
            <section className="contact">
                <Back name="Contact & Support" title="How can we help ?" cover={banner}/>
                <div className="container">
                    <form className="shadow"
                    action="https://formsubmit.co/3a2c4c7c0758f4b8bb80d447ffbe51ef" 
                    method="POST">
                        <h4>Your email address will not be published. Required fields are marked with <span>*</span></h4>

                        <label>Name <span>*</span></label>
                        <input type="text" name="name" placeholder="Your name" required />

                        <label>Email <span>*</span></label>
                        <input type="email" name="email" placeholder="Your Email" required />

                        <label>Subject</label>
                        <input type="subject" name="subject" placeholder="Your Subject"/>

                        <label>Message <span>*</span></label>
                        <textarea name="message" rows="10" required></textarea>

                        <button type="submit">Send Request</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;