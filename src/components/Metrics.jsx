import {MetricsData} from "../utils/statisticalData";
import "../styles/Metrics.css";
import FlipNumbers from 'react-flip-numbers';
import useMediaQuery from '../../public/hooks/useMediaQuery';
import { useInView } from "react-intersection-observer";


const Metrics = () => {
    const numberSize = useMediaQuery('(min-width: 991px)') ? 62 : 32;
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
      })

    return (
        <div id="metrics">
           {/* <div className="value_container">
                {MetricsData.map((data, index) => {
                    return (
                        <div key={index} className="value_card">
                            <div className="value" ref={ref}>
                            <FlipNumbers height={numberSize} width={numberSize-12}  play={inView} numbers={data.value} duration={5}/>
                            </div>
                            <div className="title">{data.title}</div>
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
}

export default Metrics;