import React from "react";
import "./Featured.css"
import Heading from "../../header/Heading";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    return (
        <>
            <section className="featured background">
                <div className="container">
                    <Heading title="Featured Car Types" subtitle="Find your favourite type of car."/>
                    <FeaturedCard />
                </div>
            </section>
        </>
    );
}

export default Featured;