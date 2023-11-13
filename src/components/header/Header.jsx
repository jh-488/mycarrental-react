import React, { useState, useEffect } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { nav } from "../data/Data";
import logo from "/logo.webp";

const Header = () => {
    const [navList, setNavList] = useState(false);

    useEffect(() => {
        // Function to handle screen size changes
        const handleScreenSize = () => {
            if (window.innerWidth > 768) {
                setNavList(false);
            }
        };

        window.addEventListener("resize", handleScreenSize);

        return () => {
            window.removeEventListener("resize", handleScreenSize);
        };
    }, []);

    return (
        <>
            <header>
                <div className="container flex">
                    <div className="logo">
                        <img src={logo} alt="myCarRental logo" />
                    </div>
                    <div className="nav">
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>
                                        {list.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="toggle">
                        <button aria-label="Open/Close menu" onClick={() => setNavList(!navList)}>
                            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;