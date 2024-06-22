import {statisticalData} from "../utils/statisticalData";
import SectionHeading from "./SectionHeading";
import FlipNumbers from 'react-flip-numbers';
import useMediaQuery from '../../public/hooks/useMediaQuery';
import { useInView } from "react-intersection-observer";


const AdditionalDetails = () => {
    const numberSize = useMediaQuery('(min-width: 991px)') ? 48 : 40;
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
      })

    return (
        <div id="additional_details">
            {/* <SectionHeading title="Numbers Matter!" heading="Here are some stats in my journey so far" styles={{maxWidth: "100%"}} />
            <div className="number_container">
                {statisticalData.map((data, index) => {
                    return (
                        <div key={index} className="number_card">
                            <div className="value" ref={ref}>
                            <FlipNumbers height={numberSize} width={numberSize-10}  play={inView} numbers={data.number} duration={3}/>
                            </div>
                            <div className="title">{data.title}</div>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}

export default AdditionalDetails;