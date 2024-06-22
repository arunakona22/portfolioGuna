import {HomeLogos} from '../utils/partnerCompaniesLogo';


const Partners = () => {
    return (
        <div id="partners">
            <div>
                {HomeLogos.logos.map((logo, index) => {
                    return <img key={index} className={`partner_img ${logo === 'company_3.png' ? 'internshala' : ''}`} src={HomeLogos.basePath + logo} alt="logo" />
                })}
            </div>
        </div>
    );
}

export default Partners;