import React from "react";
import { reviews } from "../../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

const ReviewsCard = () => {
    const arrowsRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ]
    };

    return (
        <>
            <div className="content mtop">
                <Slider ref={arrowsRef} {...settings}>
                    {reviews.map((item, index) => (
                        <div className="box" key={index}>
                            <div className="box-image">
                                <img src={item.image} alt="Costumer image" />
                            </div>
                            <div>
                                <h4>{item.name}</h4>
                                <p>{item.review}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <button 
                    className="previous" 
                    onClick={() => arrowsRef.current.slickPrev()}>
                        <i className="fa fa-arrow-left"></i>
                </button>
                <button 
                    className="next" 
                    onClick={() => arrowsRef.current.slickNext()}>
                        <i className="fa fa-arrow-right"></i>
                </button>
            </div>
        </>
    );
}

export default ReviewsCard;