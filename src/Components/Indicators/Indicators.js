
import './Indicators.css';
import img1 from '../../Assets/thunderstorm-icon.png';
import img2 from '../../Assets/drizzle-icon.png';
import img3 from '../../Assets/rain-icon.png';
import img4 from '../../Assets/snow-icon.png';
import img5 from '../../Assets/atmosphere-icon.png';
import img6 from '../../Assets/clear-icon.png';
import img7 from '../../Assets/clouds-icon.png';

const Indicators = ({ activeWeatherCondition }) => {
    return (
        <div className='indicators-container'>
            <div className={`indicator ${activeWeatherCondition === 'Clear' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img6} alt="weather icon" />
            </div>
            <div className={`indicator ${activeWeatherCondition === 'Thunderstorm' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img1} alt="weather icon" />
            </div>
            <div className={`indicator ${activeWeatherCondition === 'Drizzle' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img2} alt="weather icon" />
            </div>
            <div className={`indicator ${activeWeatherCondition === 'Rain' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img3} alt="weather icon" />
            </div>
            <div className={`indicator ${activeWeatherCondition === 'Snow' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img4} alt="weather icon" />
            </div>
            <div className={`indicator ${activeWeatherCondition === 'Atmosphere' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img5} alt="weather icon" />
            </div>
            <div className={`indicator ${activeWeatherCondition === 'Clouds' ? 'active' : ''}`}>
                <img className='indicatorIco' src={img7} alt="weather icon" />
            </div>
        </div>
    )
}
export default Indicators;