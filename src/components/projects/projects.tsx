import { useState, useCallback, memo } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/projects/projects.css';
import '../../css/projects/borderAnimation.css';
import ProjectModal from "./projectsModal.tsx";
import { MyProjects } from "./myProjects.ts";
import { getTechBadgeVariant, projectStatus } from "../utils/badges/techBadges.ts";
import { Project } from "../../types/types.ts";
import '../../css/globalCSS.css';
import { useTranslation } from "react-i18next";

const ProjectCard = memo(({ project, onClick }: { project: Project, onClick: (project: Project) => void }) => {

    const handleClick = useCallback(() => {
        onClick(project);
    }, [onClick, project]);

    return (
        <Card
            className="project-card h-100"
            onClick={handleClick}
            style={{ borderRadius: 'var(--border-radius)' }}
        >
            <Card.Body className="d-flex flex-column">
                <div className="project-header d-flex w-100 align-items-start mb-3">
                    <Card.Title className="mb-0 text-white w-100">
                        <div className="w-100 d-flex justify-content-between">

                            <span>{project.title}</span>

                            {project.projectStatus.length > 0 && (
                                <Badge
                                    bg={projectStatus(project.projectStatus[0])}
                                    className="status-badge"
                                >
                                    {project.projectStatus[0]}
                                </Badge>
                            )}
                        </div>

                        <span className="project-year">{project.year}</span>

                    </Card.Title>
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
    );
});

ProjectCard.displayName = 'ProjectCard';

const Projects = () => {

    const { t } = useTranslation();
    const myProjects = MyProjects();

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = useCallback((project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    return (
        <section id="projects-section">

            <div className="common-header">{t('projects.sectionTitle')}</div>

            <div className="common-description">
                {t('projects.sectionDescription')}
            </div>

            <Row className="g-4 projects-grid p-2">
                {myProjects.map(project => (
                    <Col key={project.id} md={6} lg={6}>
                        <ProjectCard project={project} onClick={openModal} />
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