import React from 'react';
import { companyLogos } from '../utils/partnerCompaniesLogo';
import "../styles/Brands.css";
import SectionHeading from "./SectionHeading";

const Brands = props => {
  // Duplicate the logos array
  const logos = [...companyLogos.logos, ...companyLogos.logos];

  return (
    <div id="brands">
      <SectionHeading title="Brands I worked With" heading="Lasting Relations With" styles={{ maxWidth: "100%" }} />
      <div className='brands-container'>
        {logos.map((logo, index) => {
          return <img key={index} src={companyLogos.basePath + logo} alt="logo" />
        })}
      </div>
    </div>
  )
}

export default Brands;
