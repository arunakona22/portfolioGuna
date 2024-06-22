const SectionHeading = ({ title, heading, styles }) => {
    return (
        <div className="section_heading" style={styles}>
            <div className="section_title">{title}</div>
            <div className="heading">{heading}</div>
        </div>
    );
}

export default SectionHeading;