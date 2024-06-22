import socialMediaLinks from "../utils/socialMediaData";

const Contact = () => {
    return (
        <div id="contact">
            {/* <div className="contact-container">
                <div className="contact-description">
                    <div className="contact_section_title">Got An Idea?</div>
                    <div className="contact_heading">Let’s build it Together!</div>
                </div>
                <a target="_blank" href='https://forms.gle/QtZ3nUhZKJ2VySbu7' id="email_btn">Get In Touch</a>
            </div> */}
            
            <div id="message_me_txt">If you’d like to know more about any of my work or would like to see more projects, just drop me a message.</div>
            <div className="links">
                {socialMediaLinks.map((socialMedia, index) => {
                    return <a key={index} target="_blank" href={socialMedia.link} className="social_media_link">{socialMedia.name}</a>
                })}
            </div>
        </div>
    );
}

export default Contact;