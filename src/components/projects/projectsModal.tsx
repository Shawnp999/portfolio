import React from 'react';
import { Modal, Card, Button, Badge, Row, Col, Container } from 'react-bootstrap';
import '../../css/projects/projectsModal.css';
import {getTechBadgeVariant} from "../utils/techBadges.ts";
import {ProjectModalProps} from "../../types/types.ts";



const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
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
                <Modal.Title>
                    {project.title} <small className="text-muted ms-2">{project.year}</small>
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
                                    />


                                </div>

                                <div className="d-block d-lg-none">
                                    <h5 className="mt-2 mb-2">Technologies</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-2">
                                    {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                bg={getTechBadgeVariant(tech)}
                                                className="tech-badge px-3 py-2"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </Col>

                        <Col lg={6}>
                            <Card.Body className="p-0 h-100 d-flex flex-column">
                                <Card.Text style={{whiteSpace : 'pre-line', }}>{project.detailedDescription}</Card.Text>

                                <div className="d-none d-lg-block">
                                    <h5 className="mt-2 mb-3">Technologies</h5>
                                    <div className="d-flex flex-wrap gap-2 mb-2">
                                        {project.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                bg={getTechBadgeVariant(tech)}
                                                className="tech-badge px-3 py-2"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-3">
                                    <div className="d-flex flex-wrap gap-3 justify-content-around">
                                        <Button
                                            variant="dark"
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="medium-btn fs-14"
                                        >
                                            <i className="bi bi-github me-2"></i>
                                            View Repository
                                        </Button>

                                        {project.liveUrl && (
                                            <Button
                                                variant="primary"
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="medium-btn fs-14"
                                            >
                                                <i className="bi bi-box-arrow-up-right me-2"></i>
                                                View Live Demo
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
};

export default ProjectModal;