import React from "react";
import "./AboutPage.css"
import Back from "../back/Back";
import img from "/images/about-page/about-page-banner.jpg";
import Heading from "../header/Heading";
import { aboutInfo } from "../data/Data";
import aboutImg from "/images/about-page/about-page-img.jpg";

const AboutPage = () => {
    return (
        <>
            <section className="about-page">
                <Back name="About Us" title="Who We Are ?" cover={img}/>
                <div className="container flex mtop">
                    <div className="left row">
                        <Heading title="Our Mission" subtitle="Our Journey and Vision"/>

                        <p>
                        Our mission is simple: to deliver the ultimate car rental experience, 
                        making it accessible to everyone. Whether you need a car for business, 
                        leisure, or any other purpose, we aim to provide you with the perfect 
                        vehicle that suits your needs, at competitive rates. 
                        Our commitment is to ensure that you have the freedom and flexibility to travel on your terms.
                        </p>

                        <Heading title="Why Choose myCarRental?"/>

                        {aboutInfo.map((val, index) => {
                            return (
                                <div key={index}>
                                <h4><i className="fa fa-circle-check"></i>{val.title}</h4>
                                <p>{val.text}</p>
                            </div>
                            )
                        })}
                    </div>
                    <div className="right row">
                        <img src={aboutImg} alt="car rental banner" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutPage;