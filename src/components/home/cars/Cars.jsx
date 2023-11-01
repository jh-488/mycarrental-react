import React, { forwardRef } from "react";
import "./Cars.css"
import Heading from "../../header/Heading";
import CarsCard from "./CarsCard";


const Cars = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <section className="cars padding background">
                <div className="container">
                    <Heading title="Our Cars" subtitle="Check our different cars and be the next one to try them out."/>
                    <CarsCard />
                </div>
            </section>
        </div>
    );
})

export default Cars;