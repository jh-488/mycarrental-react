import React from "react";
import "./Faqs.css"
import Back from "../back/Back";
import banner from "/images/faqs-page/faqs-banner.webp"
import { faqsData } from "../data/Data";
import Accordion from "../accordion/Accordion";

const HowTo = () => {
    return (
        <>
            <section className="faqs">
                <Back name="Frequently Asked Questions" title="Find answers to your questions" cover={banner}/>
                <div className="accordion">
                    <Accordion sections={faqsData}/>
                </div>
            </section>
        </>
    );
}

export default HowTo;