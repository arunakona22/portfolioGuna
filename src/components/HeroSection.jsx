import { personName, companyName } from '../utils/userData';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

const HeroSection = () => {
    return (
        <div id="home">
            <div className="greet_msg">Hi! 👋 I’m  {personName}</div>
            <div className="work_info">Motion Graphic Designer </div>
            <div className="work_info-second">based in India.</div>
           
            <div className="button_section">
                <Link className="hire_me_btn" type="button" to="contact" spy={true} smooth={true} offset={-110} duration={1000}>Hire Me</Link>
                <Link className="learn_more_btn" type="button" to="partners" spy={true} smooth={true} offset={-80} duration={1000}>Learn More <AiOutlineArrowDown /></Link>
            </div>
        </div>
    );
}

export default HeroSection;