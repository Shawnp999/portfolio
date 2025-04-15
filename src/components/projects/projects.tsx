import { useState } from 'react';
import './Projects.css';
import ProjectModal from "./projectsModal.tsx";

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

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        // Re-enable scrolling when modal is closed
        document.body.style.overflow = 'auto';
    };

    const projects: Project[] = [
        {
            id: 1,
            title: 'Peerapat Residence',
            year: '2021',
            description: 'A website for Peerapat Residence, a serviced apartment in Bangkok.',
            technologies: ['Gatsby', 'React', 'JavaScript'],
            imageUrl: '/project1.jpg',
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 2,
            title: 'Tarot',
            year: '2020',
            description: 'An experimental webpage to learn MobX state managing and manual webpack configuration.',
            technologies: ['React', 'MobX', 'Webpack', 'Babel'],
            imageUrl: '/project2.jpg',
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 3,
            title: 'ChordsHouse',
            year: '2020',
            description: 'A python desktop application to store your guitar chords, with features to transpose the keys and auto scroll for convenience playing.',
            technologies: ['Python', 'PyQt', 'MongoDB'],
            imageUrl: '/project3.jpg',
            githubUrl: '#',
            liveUrl: '#'
        },
        {
            id: 4,
            title: 'Endustry',
            year: '2020',
            description: 'A demo mobile Flutter application for news and services from Ministry of Industry.',
            technologies: ['Flutter', 'Dart'],
            imageUrl: '/project4.jpg',
            githubUrl: '#',
            liveUrl: '#'
        }
    ];

    const renderTechBadge = (tech: string) => {
        const colors: Record<string, string> = {
            'Gatsby': 'purple',
            'React': 'blue',
            'JavaScript': 'yellow',
            'MobX': 'orange',
            'Webpack': 'teal',
            'Babel': 'red',
            'Python': 'green',
            'PyQt': 'cyan',
            'MongoDB': 'green',
            'Flutter': 'blue',
            'Dart': 'blue'
        };

        return (
            <span
                key={tech}
                className={`tech-badge ${colors[tech] || 'gray'}`}
            >
                {tech}
            </span>
        );
    };

    return (
        <section id="projects-section">
            <h2>Projects</h2>
            <p className="section-desc">
                Outside of the full-time job, these are some of the projects that I've built as a
                hobby, school, or freelance works.
            </p>

            <div className="projects-grid">
                {projects.map(project => (
                    <div
                        className="project-card"
                        key={project.id}
                        onClick={() => openModal(project)}
                    >
                        <div className="project-header">
                            <h3 style={{color: '#fff'}}>{project.title} <span className="project-year">{project.year}</span></h3>
                            <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                <a
                                    href={project.githubUrl}
                                    className="project-link"
                                    aria-label="GitHub Repository"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="icon-github">🔍</i>
                                </a>
                                <a
                                    href={project.liveUrl}
                                    className="project-link"
                                    aria-label="Live Demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="icon-external">↗️</i>
                                </a>
                            </div>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map(tech => renderTechBadge(tech))}
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={modalOpen}
                onClose={closeModal}
            />
        </section>
    );
};

export default Projects;