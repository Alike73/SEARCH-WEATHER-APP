import { useState } from "react";
import weatherAppImg from '../Assets/weather_app.svg';


const WeatherInput = ({ formSubmit, submitHandler, inputHandler, handleKeyPress, getCity }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [inputWidth, setInputWidth] = useState(0);

    const handleNameClick = () => {
        setIsExpanded(!isExpanded);
        setInputWidth(inputWidth ? 0 : 100);
    };
    

    return (
        <>
            <form className="p-4 p-md-5" onSubmit={formSubmit}>
                        
                <label htmlFor="floatingInput">Type your city...</label>
                
                    <div className="w-100 d-flex myInputBox">
                        <input 
                            type="search" 
                            className={`form-control form-control-lg mySearch mb-3 ${isExpanded ? "expanded" : ""}`} 
                            id="floatingInput" 
                            placeholder="Type your city..."
                            style={{ width: `${inputWidth}%` }} 
                            value={getCity}
                            onChange={inputHandler}
                            onKeyDown={handleKeyPress}
                        />

                        <div className='icon' onClick={handleNameClick}>
                            <span className={isExpanded ? "tooltipClose" : "tooltip"}>{isExpanded ? 'Close search' : 'Open search'}</span>
                            <i className="bi bi-pen-fill fs-2 inputSearchPen"></i>
                        </div>
                        <img className={ isExpanded ? "hidden" : "weatherAppImg" } src={weatherAppImg} alt="weatherAppImg" />
                    </div>
                
                <button className="submitBtn" type="button" onClick={submitHandler} disabled={!getCity.trim()}>
                    Submit {getCity}
                </button>

            </form>
        </>
    )
}
export default WeatherInput;
