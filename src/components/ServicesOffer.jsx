import SectionHeading from "./SectionHeading";
import servicesProvide from "../utils/servicesProvideData";
import OfferCard from "./OfferCard";

const ServicesOffer = () => {
    return (
        <div id="services_offer">
            <SectionHeading title="Digital Services I offer" heading="I help to create in design strategies" />
            <div className="services_container">
                {servicesProvide.map((service, index) => {
                    return <OfferCard key={index} service={service} />
                })}
            </div>
        </div>
    );
}

export default ServicesOffer;