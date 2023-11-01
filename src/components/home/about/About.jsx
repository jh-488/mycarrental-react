import React from "react";
import "./About.css";
import Heading from "../../header/Heading";
import logo from "/logo.png";

const About = () => {
    return (
        <>
            <section className="about background">
                <div className="container flex mtop">
                    <div className="about-text">
                        <Heading title="About Us" subtitle="Welcome to myCarRental."/>

                        <p>At myCarRental, we understand that every journey is an adventure waiting to be explored. 
                            Whether you're traveling for business or pleasure, our mission is to make your car rental 
                            experience as seamless and enjoyable as possible. With a passion for automobiles and a commitment 
                            to customer satisfaction, we're here to exceed your expectations.
                        </p>
                        <div className="bullets grid2">
                            <p><i className="fa fa-square-check"></i>A Wide Selection of Quality Vehicles</p>
                            <p><i className="fa fa-square-check"></i>Competitive Pricing</p>
                            <p><i className="fa fa-square-check"></i>Exceptional Customer Service</p>
                            <p><i className="fa fa-square-check"></i>Safety and Maintenance</p>
                        </div>
                    </div>
                    <div className="about-img">
                    <img src={logo} alt="about section image" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;