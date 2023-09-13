import './Footer.css';
import { useEffect, useState } from "react";


const Footer = () => {

    const [year, setYear] = useState('');
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [])


    return (
        <div className="py-5 d-flex justify-content-center align-items-center Footer">
            <p className="footerText py-3">
                &copy; {year} Created with <i className="bi bi-heart-fill mx-2"></i> by <br /> 
                Dev <span className="backwards-arrow">
                milA_volukmalsI
                <i className="bi bi-emoji-smile-upside-down ms-2 fs-5 text-primary"></i>
                </span>
            </p>
        </div>
    )
}
export default Footer;