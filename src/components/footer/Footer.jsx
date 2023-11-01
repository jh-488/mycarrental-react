import React from "react";
import "./Footer.css"
import { footer } from "../data/Data";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Footer = () => {
    // to navigate to contact page when contact us is clicked
    const navigate = useNavigate();

    const navigateToContactPage = () => {
        navigate("/contact");
    }

    // for the modal dialog (after newsletter subscription)
    const modalRef = useRef(null);

    const openModal = () => {
        modalRef.current.showModal();
    }

    const closeModal = () => {
        modalRef.current.close();
    }

    // handle item click in footer
    const handleItemClick = (link, openInNewTab) => {
        if (openInNewTab) {
            window.open(link, "_blank");
        } else {
            navigate(link);
        }
    }


    return (
        <>
            <section className="footerContact">
                <div className="container">
                    <div className="send flex">
                        <div className="text">
                            <h1>Any Questions ?</h1>
                            <p>Feel free to contact us if you need any help.</p>
                        </div>
                        <button className="btn3" onClick={navigateToContactPage}>Contact Us</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <img src="/logo.png" alt="logo" />
                            <h2>Subscribe to our Newsletter</h2>
                            <p>Receive updates, hot deals and discounts sent straignt to your inbox.</p>

                            <div className="input flex">
                                <input type="email" placeholder="Email Address"/>
                                <button onClick={openModal}>Subscribe</button>
                                <dialog ref={modalRef} className="modal">
                                    <p>Thank you for subscribing to our newsletter.</p>
                                    <button onClick={closeModal}>Close</button>
                                </dialog>
                            </div>
                        </div>
                    </div>

                    {footer.map((val, index) => (
                        <div className="box" key={index}>
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items, index2) => (
                                    <li key={index2} 
                                        onClick={() => {
                                            if (items.page) {
                                                handleItemClick(items.page, false);
                                            } else if (items.url) {
                                                handleItemClick(items.url, true);
                                            }
                                        }}>{items.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <div className="copyright">
                <span>© 2023 myCarRental. Created by <i>JH</i>.</span>
            </div>
        </>
    );
}

export default Footer;