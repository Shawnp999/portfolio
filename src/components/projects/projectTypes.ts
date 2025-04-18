export interface Project {
    id: number;
    title: string;
    year: string;
    shortDescription: string;
    detailedDescription: string;
    technologies: string[];
    imageUrl: string;
    imageAlt?: string;          // Added for accessibility
    imageWidth?: number | string; // Added to support responsive images
    imageHeight?: number | string; // Added to support responsive images
    githubUrl: string;
    liveUrl: string;
}