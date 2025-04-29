import {useState} from 'react';
import {Card, Badge, Row, Col} from 'react-bootstrap';
import './projects.css';
import ProjectModal from "./projectsModal.tsx";
import {Project} from "./projectTypes.ts";
import {myProjects} from "./myProjects.ts";
// import TooltipLink from "../toolTip/toolTip.tsx";
import {getTechBadgeVariant} from "../utils/techBadges.tsx";

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <p className="section-desc">
                Outside of the full-time job, these are some of the projects that I've built as a
                hobby, school, or freelance works.
            </p>

            <Row className="g-4 projects-grid">
                {myProjects.map(project => (
                    <Col key={project.id} md={6} lg={4}>
                        <Card
                            className="project-card h-100"
                            onClick={() => openModal(project)}
                        >
                            <Card.Body className="d-flex flex-column">
                                <div className="project-header d-flex justify-content-between align-items-start mb-3">
                                    <Card.Title className="mb-0 text-white">
                                        {project.title} <span className="project-year">{project.year}</span>
                                    </Card.Title>

                                    <div className="project-links">
                                        {/*<TooltipLink*/}
                                        {/*    href={project.githubUrl}*/}
                                        {/*    tooltipText="View GitHub Repository"*/}
                                        {/*    ariaLabel="GitHub Repository"*/}
                                        {/*    className="project-link"*/}
                                        {/*>*/}
                                        {/*    <i className="bi bi-github"></i>*/}
                                        {/*</TooltipLink>*/}

                                        {/*<TooltipLink*/}
                                        {/*    href={project.liveUrl}*/}
                                        {/*    tooltipText="View Live Demo"*/}
                                        {/*    ariaLabel="Live Demo"*/}
                                        {/*    className="project-link"*/}
                                        {/*    placement="bottom"*/}
                                        {/*>*/}
                                        {/*    <i className="bi bi-box-arrow-up-right"></i>*/}
                                        {/*</TooltipLink>*/}
                                    </div>
                                </div>

                                <Card.Text className="project-description mb-4">{project.shortDescription}</Card.Text>

                                <div className="project-tech mt-auto">
                                    {project.technologies.map(tech => (
                                        <Badge
                                            key={tech}
                                            bg={getTechBadgeVariant(tech)}
                                            className="tech-badge me-2 mb-2 px-3 py-2"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <ProjectModal
                project={selectedProject}
                isOpen={modalOpen}
                onClose={closeModal}
            />
        </section>
    );
};

export default Projects;