import React, { Suspense, lazy } from "react";
import Header from "../header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../home/Home"));
const AboutPage = lazy(() => import("../aboutPage/AboutPage"));
const Faqs = lazy(() => import("../faqs/Faqs"));
const Contact = lazy(() => import("../contact/Contact"));
import Footer from "../footer/Footer";
import ScrollToTop from "../helpers/scrollToTop";


const Pages = () => {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Header />
                <Suspense fallback={<div className="spinner"></div>}>
                <Routes>
                    <Route path="/mycarrental-react" Component={Home}></Route>
                    <Route path="/mycarrental-react/about" Component={AboutPage}></Route>
                    <Route path="/mycarrental-react/faqs" Component={Faqs}></Route>
                    <Route path="/mycarrental-react/contact" Component={Contact}></Route>
                </Routes>
                </Suspense>
                <Footer />
            </Router>
        </>
    );
}

export default Pages;