

const Project = ({ project }) => {
    return (
        <div className="project_card" >
            <img className="width-cover" src={project.workSampleImg} alt=""/>
        </div>
    )
}

export default Project;