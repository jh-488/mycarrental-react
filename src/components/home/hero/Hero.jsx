import React, { useState } from "react";
import "./hero.css"
import Heading from "../../header/Heading";

const Hero = ({scrollToCarsSection}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [date, setDate] = useState();

    const startMinDate = new Date().toISOString().split("T")[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const EndMindate = tomorrow.toISOString().split("T")[0];

    return (
        <>
            <section className="hero">
                <div className="container" onSubmit={handleSubmit}>
                    <Heading title="Search Our Cars" subtitle="Find a car located in your city."/>
                    <form className="flex">
                        <div className="box">
                            <label htmlFor="cities-select">City</label>
                            <select name="cities" id="cities-select">
                                <option value="">-- Choose a City</option>
                                <option value="berlin">Berlin</option>
                                <option value="frankfurt">Frankfurt</option>
                                <option value="london">London</option>
                                <option value="paris">Paris</option>
                                <option value="madrid">Madrid</option>
                            </select>
                        </div>
                        <div className="box">
                            <label htmlFor="cars-select">Car Type</label>
                            <select name="cars" id="cars-select">
                                <option value="">-- Choose a Car Type</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="Coupe">Coupe</option>
                                <option value="convertible">Convertible</option>
                                <option value="sport-car">Sport Car</option>
                            </select>
                        </div>
                        <div className="box">
                            <label htmlFor="start-date">Start date</label>
                            <input 
                                type="date" 
                                id="start-date" 
                                name="rental-start" 
                                onChange={(e) => setDate(e.target.value)} 
                                min={startMinDate}/>
                        </div>
                        <div className="box">
                            <label htmlFor="end-date">End date</label>
                            <input 
                                type="date" 
                                id="end-date" 
                                name="rental-end" 
                                onChange={(e) => setDate(e.target.value)} 
                                min={EndMindate}/>
                        </div>
                        <button 
                            className="btn" 
                            onClick={scrollToCarsSection}
                            aria-label="Search cars"    
                        >
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Hero;