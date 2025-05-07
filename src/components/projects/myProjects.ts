import projectImages from "../../assets/images/projectImages/projectImages.ts";
import { Project } from "../../types/types.ts";
import { useTranslation } from "react-i18next";
import { useMemo } from 'react';

export const useMyProjects = () => {

    const { t, i18n } = useTranslation();

    const myProjects = useMemo(() => {
        return [
            {
                id: 1,
                title: t('projects.project1.title'),
                year: t('projects.project1.year'),
                shortDescription: t('projects.project1.shortDescription'),
                detailedDescription: t('projects.project1.detailedDescription'),
                technologies: ['React', 'TypeScript', 'SPFX', 'Gulp', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
                imageUrl: projectImages.profileComponent.src,
                imageAlt: projectImages.profileComponent.alt,
                imageWidth: projectImages.profileComponent.width,
                imageHeight: projectImages.profileComponent.height,
                githubUrl: 'https://github.com/Shawnp999/SPFX-React-Profile-Page',
                liveUrl: '',
                projectStatus: [t('projects.statusLabels.production')]
            },
            {
                id: 2,
                title: t('projects.project2.title'),
                year: t('projects.project2.year'),
                shortDescription: t('projects.project2.shortDescription'),
                detailedDescription: t('projects.project2.detailedDescription'),
                technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
                imageUrl: projectImages.userDirectoryScreenBlur.src,
                imageAlt: projectImages.userDirectoryScreenBlur.alt,
                imageWidth: projectImages.userDirectoryScreenBlur.width,
                imageHeight: projectImages.userDirectoryScreenBlur.height,
                githubUrl: 'https://github.com/Shawnp999/user-directory-react',
                liveUrl: '',
                projectStatus: [t('projects.statusLabels.production')]
            },
            {
                id: 3,
                title: t('projects.project3.title'),
                year: t('projects.project3.year'),
                shortDescription: t('projects.project3.shortDescription'),
                detailedDescription: t('projects.project3.detailedDescription'),
                technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
                imageUrl: projectImages.blurredSeatingChart.src,
                imageAlt: projectImages.blurredSeatingChart.alt,
                imageWidth: projectImages.blurredSeatingChart.width,
                imageHeight: projectImages.blurredSeatingChart.height,
                githubUrl: 'https://github.com/Shawnp999/SPFX-Seating-Chart',
                liveUrl: '',
                projectStatus: [t('projects.statusLabels.production')]
            },
            {
                id: 4,
                title: t('projects.project4.title'),
                year: t('projects.project4.year'),
                shortDescription: t('projects.project4.shortDescription'),
                detailedDescription: t('projects.project4.detailedDescription'),
                technologies: ['React', 'TypeScript', 'Gulp', 'SPFX', 'HTML/CSS', 'Microsoft GraphQL', 'i18n'],
                imageUrl: projectImages.blurredBirthdayComponent.src,
                imageAlt: projectImages.blurredBirthdayComponent.alt,
                imageWidth: projectImages.blurredBirthdayComponent.width,
                imageHeight: projectImages.blurredBirthdayComponent.height,
                githubUrl: 'https://github.com/Shawnp999/uzmto_BirthdayCalendar',
                liveUrl: '',
                projectStatus: [t('projects.statusLabels.production')]
            },
            {
                id: 5,
                title: t('projects.project5.title'),
                year: t('projects.project5.year'),
                shortDescription: t('projects.project5.shortDescription'),
                detailedDescription: t('projects.project5.detailedDescription'),
                technologies: ['Bootstrap 5', 'JavaScript', 'Django', 'HTML/CSS', 'Python', 'Git', 'Figma'],
                imageUrl: projectImages.consultingSite.src,
                imageAlt: projectImages.consultingSite.alt,
                imageWidth: projectImages.consultingSite.width,
                imageHeight: projectImages.consultingSite.height,
                githubUrl: 'N/A',
                liveUrl: 'https://websmartcons.com/',
                projectStatus: [t('projects.statusLabels.development'), t('projects.statusLabels.beta')]
            },
            {
                id: 6,
                title: t('projects.project6.title'),
                year: t('projects.project6.year'),
                shortDescription: t('projects.project6.shortDescription'),
                detailedDescription: t('projects.project6.detailedDescription'),
                technologies: ['React Native', 'Git', 'CI/CD', 'i18n', 'Expo', 'Zustand', 'Context API', 'Firebase', 'Figma', 'TypeScript'],
                imageUrl: projectImages.scannsplit.src,
                imageAlt: projectImages.scannsplit.alt,
                imageWidth: projectImages.scannsplit.width,
                imageHeight: projectImages.scannsplit.height,
                githubUrl: 'N/A',
                liveUrl: 'https://play.google.com/store/apps/details?id=com.scannsplit.mobapp&hl=en',
                projectStatus: [t('projects.statusLabels.beta'), t('projects.statusLabels.development')]
            },
            {
                id: 7,
                title: t('projects.project7.title'),
                year: t('projects.project7.year'),
                shortDescription: t('projects.project7.shortDescription'),
                detailedDescription: t('projects.project7.detailedDescription'),
                technologies: ['React', 'Git', 'i18n', 'Vite', 'TypeScript', 'Bootstrap 5', 'HTML/CSS'],
                imageUrl: projectImages.myPortfolio.src,
                imageAlt: projectImages.myPortfolio.alt,
                imageWidth: projectImages.myPortfolio.width,
                imageHeight: projectImages.myPortfolio.height,
                githubUrl: 'https://github.com/Shawnp999/portfolio',
                liveUrl: '',
                projectStatus: [t('projects.statusLabels.development')]
            }
        ] as Project[];

    }, [t, i18n.language]);

    return myProjects;
};

export const MyProjects = useMyProjects;

