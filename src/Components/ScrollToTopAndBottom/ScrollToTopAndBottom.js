
import './ScrollToTopAndBottom.css';
import React, { useState, useEffect } from "react";


const ScrollToTopAndBottom = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <div>
            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <span className="icon-position icon-style d-flex justify-content-center align-items-center" onClick={goToTop}>
                        <i className="bi bi-chevron-up fs-3"></i>
                    </span>
                )}{" "}
            </div>
        </div>
    );
};
export default ScrollToTopAndBottom;
