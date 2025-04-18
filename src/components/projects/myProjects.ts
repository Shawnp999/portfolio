import { Project } from "./projectTypes";
// Import your image references
import projectImages from "../../assets/images/projectImages/projectImages.ts";

export const myProjects: Project[] = [
    {
        id: 1,
        title: 'SPFX Employee Profile Portal',
        year: '2023',
        shortDescription: 'SharePoint web part enabling personalized employee profiles',
        detailedDescription: 'Developed and architected a responsive, dynamic SPFx component for employee profile pages.\n\nLeveraging the Microsoft Graph API, the component retrieves and updates user information, allowing employees to personalize and manage their profiles.\n\nIt integrates seamlessly with the seating chart and user directory, enhancing the user experience by making it easy to locate coworkers and view their details in a visually friendly interface.\n\nIntegrated multilingual support using i18n, automatically adapting the interface to the user\'s selected language—English, Russian, or Uzbek—with English set as the default fallback.',
        technologies: ['React', 'TypeScript', 'SPFX', 'Gulp', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
        imageUrl: projectImages.profileComponent.src,
        imageAlt: projectImages.profileComponent.alt,
        imageWidth: projectImages.profileComponent.width,
        imageHeight: projectImages.profileComponent.height,
        githubUrl: '',
        liveUrl: ''
    },
    {
        id: 2,
        title: 'SPFX Employee Directory',
        year: '2024',
        shortDescription: 'Multilingual company directory with advanced filtering and profile integration',
        detailedDescription: 'Designed and implemented a user-friendly employee directory for the company.\n\nUsing Microsoft Graph API, I enabled efficient querying and filtering of users by department or custom search.\n\nThe directory features dynamic navigation—clicking on a user seamlessly routes to their individual profile page, creating a smooth and intuitive user experience.\n\nIntegrated multilingual support using i18n, automatically adapting the interface to the user\'s selected language—English, Russian, or Uzbek—with English set as the default fallback.',
        technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
        imageUrl: projectImages.userDirectoryScreenBlur.src,
        imageAlt: projectImages.userDirectoryScreenBlur.alt,
        imageWidth: projectImages.userDirectoryScreenBlur.width,
        imageHeight: projectImages.userDirectoryScreenBlur.height,
        githubUrl: '#',
        liveUrl: ''
    },
    {
        id: 3,
        title: 'SPFX Interactive Seating Chart',
        year: '2024',
        shortDescription: 'Dynamic company seating map with smart navigation and multilingual support',
        detailedDescription: 'Built a dynamic, two-floor seating chart for the company, featuring department-based filtering and user highlighting for easy employee location.\n\nIntegrated with the employee profile page—when users clicked "Where I sit," the app would automatically navigate to the Seating Chart component, scroll to their exact desk, and visually highlight their seat for quick identification.\n\nIntegrated multilingual support using i18n, automatically adapting the interface to the user\'s selected language—English, Russian, or Uzbek—with English set as the default fallback.',
        technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
        imageUrl: projectImages.blurredSeatingChart.src,
        imageAlt: projectImages.blurredSeatingChart.alt,
        imageWidth: projectImages.blurredSeatingChart.width,
        imageHeight: projectImages.blurredSeatingChart.height,
        githubUrl: '#',
        liveUrl: ''
    },
    {
        id: 4,
        title: 'SPFX Upcoming Birthdays & Holidays',
        year: '2024',
        shortDescription: 'Seasonal calendar showing upcoming employee birthdays and company holidays',
        detailedDescription: 'Developed a SharePoint SPFx component that dynamically displays upcoming employee birthdays and holidays a week in advance.\n\nThe interface was seasonally color-coded for visual appeal and included clear distinctions between holidays and birthdays.\n\nThis user-friendly component helped promote team spirit and awareness by keeping employees informed of upcoming birthday celebrations and time off.\n\nIntegrated multilingual support using i18n, automatically adapting the interface to the user\'s selected language—English, Russian, or Uzbek—with English set as the default fallback.',
        technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
        imageUrl: projectImages.blurredBirthdayComponent.src,
        imageAlt: projectImages.blurredBirthdayComponent.alt,
        imageWidth: projectImages.blurredBirthdayComponent.width,
        imageHeight: projectImages.blurredBirthdayComponent.height,
        githubUrl: '#',
        liveUrl: ''
    },
    {
        id: 5,
        title: 'Professional Consulting Platform',
        year: '02/2024 - 10/2024',
        shortDescription: 'Django-based consulting website with integrated scheduling and content management',
        detailedDescription: 'Sole Front-End developer for a full-scale consulting website using Django, featuring a modular architecture and several custom-built components.\n\nIntegrated a dynamic article editor, scheduling calendars, and user-friendly dashboards.\n\nLeveraged Bootstrap 5 to ensure responsive layouts and cohesive UI across devices.\n\nEstablished a universal design system and reusable utility classes to streamline development and maintain visual consistency throughout the platform.',
        technologies: ['Bootstrap 5', 'JavaScript', 'Django', 'Git', 'HTML/CSS', 'Python', 'Git', 'Figma'],
        imageUrl: projectImages.consultingSite.src,
        imageAlt: projectImages.consultingSite.alt,
        imageWidth: projectImages.consultingSite.width,
        imageHeight: projectImages.consultingSite.height,
        githubUrl: '#',
        liveUrl: 'https://websmartcons.com/'
    },
    {
        id: 6,
        title: 'Bill Splitting Mobile App',
        year: '09/2024 - Present',
        shortDescription: 'Performance-optimized React Native app for easily splitting expenses',
        detailedDescription: 'Built React Native application in a 3-person team with Git version control and CI/CD practices, implementing React-i18next for multilingual support.\n\nIdentified and resolved performance bottlenecks using React DevTools, optimizing render cycles with strategic hook implementation.\n\nImplemented Zustand state management with optimized hooks, reducing component render times by ~50%.\n\nAdded lazy loading and code splitting for improved load performance, resulting in a highly responsive user experience.',
        technologies: ['React Native', 'Git', 'CI/CD', 'i18n', 'Expo', 'Zustand', 'Context API', 'Firebase', 'Git', 'Figma', 'TypeScript'],
        imageUrl: '/project6.jpg',
        githubUrl: '#',
        liveUrl: ''
    },
    {
        id: 7,
        title: 'My Portfolio',
        year: '04/2025',
        shortDescription: 'React personal portfolio with responsive design and modern animation effects',
        detailedDescription: 'Designed and built a personal portfolio website using React and Vite to showcase my professional projects and skills.\n\nImplemented responsive layouts with Bootstrap 5 for optimal viewing across all device sizes.\n\nCreated custom animations and transitions for a polished user experience.\n\nIntegrated TypeScript for improved code quality and developer experience.',
        technologies: ['React', 'Git', 'i18n', 'Git', 'Vite', 'TypeScript', 'Bootstrap 5'],
        imageUrl: '/project6.jpg',
        githubUrl: 'https://github.com/Shawnp999/portfolio',
        liveUrl: ''
    }
];