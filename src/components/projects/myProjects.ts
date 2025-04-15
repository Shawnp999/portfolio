import {Project} from "./projectTypes.ts";


export const myProjects: Project[] = [
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