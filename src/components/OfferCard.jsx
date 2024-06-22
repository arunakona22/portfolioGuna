const OfferCard = ({ service, index }) => {
    return (
        <div className="service_card">
            <div >
                <img className="icon" src={service.icon} />
            </div>
            <div className="service_name">{service.name}</div>
            <div className="offerings">
                {service.offerings.map((offer, index) => {
                    return (
                        <div key={index} className="offering">{offer}</div>
                    );
                })}
            </div>
        </div>
    )
}

export default OfferCard;