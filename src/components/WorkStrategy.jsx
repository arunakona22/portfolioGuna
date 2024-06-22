import SectionHeading from "./SectionHeading";
import strategies from "../utils/strategiesFollowData";

const WorkStrategy = () => {
    return (
        <div id="strategies">
            <SectionHeading title="Key Areas" heading="My Strategy & Execution" />
            <div className="strategies_container">
                {strategies.map((strategy, index) => {
                    return (
                        <div key={index} className="strategy_card">
                            <div className="step">{index + 1}</div>
                            <div className="strategy_name">{strategy.name}</div>
                            <div className="strategy_info">{strategy.info}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default WorkStrategy;