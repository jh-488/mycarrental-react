import React from "react";
import "./Reviews.css"
import Heading from "../../header/Heading";
import ReviewsCard from "./ReviewsCard";

const Reviews = () => {
    return (
        <>
            <section className="reviews">
                <div className="container padding">
                    <Heading title="Customer Reviews" subtitle=" What Our Valued Clients Have to Say"/>
                    <ReviewsCard />
                </div>
            </section>
        </>
    );
}

export default Reviews;