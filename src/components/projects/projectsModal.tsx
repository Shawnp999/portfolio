import {useEffect, memo} from 'react';
import {Modal, Card, Button, Badge, Row, Col, Container} from 'react-bootstrap';
import '../../css/projects/projectsModal.css';
import {getTechBadgeVariant, projectStatus} from "../utils/badges/techBadges.ts";
import {ProjectModalProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";

// Memoized Badge component for technologies
const TechBadge = memo(({tech}: { tech: string }) => (
    <Badge
        bg={getTechBadgeVariant(tech)}
        className="tech-badge px-3 py-2"
    >
        {tech}
    </Badge>
));

TechBadge.displayName = 'TechBadge';

// Memoized component for status badges
const StatusBadge = memo(({status}: { status: string }) => (
    <Badge
        bg={projectStatus(status)}
        className="status-badge"
    >
        {status}
    </Badge>
));

StatusBadge.displayName = 'StatusBadge';

const ProjectModal = memo(({project, isOpen, onClose}: ProjectModalProps) => {
    const {t} = useTranslation();

    // Handle esc keypress
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <Modal
            show={isOpen}
            onHide={onClose}
            centered
            size="xl"
            backdrop="static"
            animation={true}
            className="project-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title className="gap-2">
                    <span className="lh-1">
                      {project.title} <small className="text-muted">{project.year}</small>
                    </span>

                        <div className="d-flex gap-2 mt-2">
                            {project.projectStatus.map((status) => (
                                <StatusBadge key={status} status={status}/>
                            ))}
                        </div>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container fluid className="p-0">
                    <Row className="g-4">
                        <Col lg={6}>
                            <Card className="border-0 h-100 justify-content-center mb-3">
                                <div className="image-wrapper">
                                    <Card.Img
                                        variant="top"
                                        src={project.imageUrl}
                                        alt={project.imageAlt || `${project.title} screenshot`}
                                        className="project-image"
                                        loading="lazy"
                                        width={project.imageWidth || "100%"}
                                        height={project.imageHeight || "auto"}
                                    />
                                </div>

                                <div className="d-block d-lg-none">

                                    <h5 className="mt-2 mb-2">{t('projects.technologies')}</h5>

                                    <div className="d-flex flex-wrap gap-1 p-2">
                                        {project.technologies.map((tech) => (
                                            <TechBadge key={tech} tech={tech}/>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card.Body className="p-0 h-100 d-flex flex-column">
                                <Card.Text style={{whiteSpace: 'pre-line'}}>{project.detailedDescription}</Card.Text>

                                <div className="d-none d-lg-block">

                                    <h5 className="mt-2 mb-3">{t('projects.technologies')}</h5>

                                    <div className="d-flex flex-wrap gap-1 mb-2">
                                        {project.technologies.map((tech) => (
                                            <TechBadge key={tech} tech={tech}/>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-3">
                                    <div className="d-flex flex-wrap gap-3 justify-content-around">
                                        {project.githubUrl === 'N/A' ? (
                                            <Button
                                                variant="secondary"
                                                disabled
                                                className="medium-btn fs-14"
                                            >
                                                <i className="bi bi-x-circle me-2"></i>
                                                {t('projects.buttons.privateRepository')}
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="dark"
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="medium-btn fs-14"
                                            >
                                                <i className="bi bi-github me-2"></i>
                                                {t('projects.buttons.viewRepository')}
                                            </Button>
                                        )}

                                        {project.liveUrl && (
                                            <Button
                                                variant="primary"
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="medium-btn fs-14"
                                            >
                                                <i className="bi bi-box-arrow-up-right me-2"></i>
                                                {t('projects.buttons.viewLiveDemo')}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;