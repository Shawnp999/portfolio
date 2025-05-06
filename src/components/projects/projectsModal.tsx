import React from 'react';
import { Modal, Card, Button, Badge, Row, Col, Container } from 'react-bootstrap';
import '../../css/projects/projectsModal.css';
import {getTechBadgeVariant, projectStatus} from "../utils/badges/techBadges.ts";
import {ProjectModalProps} from "../../types/types.ts";
import {useTranslation} from "react-i18next";



const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {

    const { t } = useTranslation();

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

                <Modal.Title className="gap-2" >

                    <span className="lh-1">
                        {project.title} <small className="text-muted ">{project.year}</small>
                    </span>

                    <div className="d-flex gap-2 mt-2">
                        {project.projectStatus.map((status) => (
                            <Badge
                                key={status}
                                bg={projectStatus(status)}
                                className="status-badge"
                            >
                                {status}
                            </Badge>
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
                                    />


                                </div>

                                <div className="d-block d-lg-none">

                                    <h5 className="mt-2 mb-2">{t('projects.technologies')}</h5>

                                    <div className="d-flex flex-wrap gap-2 p-2">

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
                                <Card.Text style={{whiteSpace: 'pre-line',}}>{project.detailedDescription}</Card.Text>

                                <div className="d-none d-lg-block">

                                    <h5 className="mt-2 mb-3">{t('projects.technologies')}</h5>

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
};

export default ProjectModal;