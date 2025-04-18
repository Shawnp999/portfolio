import { Project } from "./projectTypes.ts";

export const myProjects: Project[] = [
    {
        id: 1,
        title: 'Sharepoint SPFX Profile Page',
        year: '2023',
        shortDescription: 'A website for Peerapat Residence, a serviced apartment in Bangkok.',
        detailedDescription: 'Developed a responsive website for Peerapat Residence, a serviced apartment in Bangkok. The site features room showcases, booking functionality, and location information using Gatsby for fast performance and SEO optimization.',
        technologies: ['React', 'TypeScript', 'SPFX', 'Gulp', 'HTML/CSS', 'Microsoft GraphQL'],
        imageUrl: '/project1.jpg',
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 2,
        title: 'Sharepoint SPFX User Directory',
        year: '2024',
        shortDescription: 'An experimental webpage to learn MobX state management and webpack configuration.',
        detailedDescription: 'Created an experimental web application to deeply understand MobX state management patterns and manual webpack configuration. Implemented custom bundling setups and optimized for development workflow with hot module replacement.',
        technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL'],
        imageUrl: '/project2.jpg',
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 3,
        title: 'Sharepoint SPFX Seating Chart',
        year: '2024',
        shortDescription: 'A Python desktop application to store guitar chords with key transposition and auto-scroll.',
        detailedDescription: 'Developed a Python desktop application that allows musicians to store, organize and display guitar chords. Features include key transposition for easy playing in different keys, auto-scrolling for hands-free usage during performance, and a customizable chord library with MongoDB storage.',
        technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL'],
        imageUrl: '/project3.jpg',
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 4,
        title: 'Sharepoint SPFX Up-Coming Birthdays',
        year: '2024',
        shortDescription: 'A demo mobile Flutter application for news and services from Ministry of Industry.',
        detailedDescription: 'Built a demo mobile application using Flutter for the Ministry of Industry to showcase news, services, and updates. The application features a clean interface with categorized information, push notifications for updates, and offline content availability.',
        technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL'],
        imageUrl: '/project4.jpg',
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 5,
        title: 'Consulting Platform',
        year: '02/2024 - 10/2024',
        shortDescription: 'Responsive Bootstrap 5 platform with integration of third-party JavaScript libraries.',
        detailedDescription: 'Sole Front-End developer implementing responsive Bootstrap 5 design across breakpoints with modern component system and Universal CSS classes. Integrated third-party JavaScript libraries including calendar systems and text editors while learning Django backend concepts. Collaborated in an agile team using Git/Bitbucket workflow for efficient development cycles and version control.',
        technologies: ['Bootstrap 5', 'JavaScript', 'Django', 'Git', 'HTML/CSS', 'Python', 'Git', 'Figma'],
        imageUrl: '/project5.jpg',
        githubUrl: '#',
        liveUrl: '#'
    },
    {
        id: 6,
        title: 'Bill Splitting Mobile App',
        year: '09/2024 - Present',
        shortDescription: 'React Native app with multilingual support and optimized performance using Zustand state management.',
        detailedDescription: 'Built React Native application in a 3-person team with Git version control and CI/CD practices, implementing React-i18next for fluid animations and UI/UX for multilingual support. Identified and resolved performance bottlenecks using React DevTools, optimizing render cycles with strategic hook implementation. Implemented Zustand state management with optimized hooks, reducing component render times by ~50%, alongside lazy loading and code splitting for improved load performance.',
        technologies: ['React Native', 'Git', 'CI/CD', 'i18n', 'Expo', 'Zustand', 'Context API', 'Firebase', 'Git', 'Figma'],
        imageUrl: '/project6.jpg',
        githubUrl: '#',
        liveUrl: '#'
    }
];