import React from "react";
import { cars } from "../../data/Data";


const CarsCard = () => {
    return (
        <>
             <div className="content grid3 mtop">
                {cars.map((items, index) => {
                    const {cover, name, location, category, price, availability} = items;
                    return (
                        <div className="box shadow" key={index}>
                            <div className="img">
                                <img src={cover} alt="car image" />
                            </div>
                            <div className="text">
                                <div className="availability flex">
                                    <span style={{background: availability === "Available" ? "#25b5791a" : "#ffcccc", 
                                    color: availability === "Available" ? "#25b579" : "#ff0000"}}>{availability}</span>
                                    <i className="fa fa-heart"></i>
                                </div>
                                <h4>{name}</h4>
                                <p>
                                    <i className="fa fa-location-dot"></i> {location}
                                </p>
                            </div>
                            <div className="button flex">
                                <div>
                                    <button className="btn2">{price}</button>
                                </div>
                                <span>{category}</span>
                            </div>
                        </div>
                    )
                })}
             </div>
        </>
    );
}

export default CarsCard;