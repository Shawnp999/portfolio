import React, { useEffect } from 'react';
import './projectsModal.css';

interface Project {
    id: number;
    title: string;
    year: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    useEffect(() => {
        // Handle escape key press to close modal
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    const renderTechBadge = (tech: string) => {
        const colors: Record<string, string> = {
            Gatsby: 'purple',
            React: 'blue',
            JavaScript: 'yellow',
            MobX: 'orange',
            Webpack: 'teal',
            Babel: 'red',
            Python: 'green',
            PyQt: 'cyan',
            MongoDB: 'green',
            Flutter: 'blue',
            Dart: 'blue',
        };

        return (
            <span key={tech} className={`tech-badge ${colors[tech] || 'gray'}`}>
                {tech}
            </span>
        );
    };

    return (
        <div className={`modal-backdrop ${isOpen ? 'modal-show' : 'modal-hide'}`} onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                <button className="modal-close-btn" onClick={onClose}>
                    ×
                </button>

                <div className="modal-header">
                    <h2>
                        {project.title} <span className="project-year">{project.year}</span>
                    </h2>
                </div>

                <div className="modal-body">
                    <div className="modal-image-container">
                        {project.imageUrl && (
                            <img src={project.imageUrl} alt={project.title} className="modal-image" />
                        )}
                    </div>
                    <div className="modal-description">
                        <p>{project.description}</p>
                        <h3>Technologies</h3>
                        <div className="modal-tech">
                            {project.technologies.map((tech) => renderTechBadge(tech))}
                        </div>
                        <div className="modal-links">
                            <a
                                href={project.githubUrl}
                                className="modal-link github-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Repository
                            </a>
                            <a
                                href={project.liveUrl}
                                className="modal-link live-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;