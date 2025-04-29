export const getTechBadgeVariant = (tech: string): string => {

    const variants: Record<string, string> = {

        // Frontend Frameworks & Libraries
        'Gatsby': 'primary',
        'React': 'primary',
        'React Native': 'primary',
        'Next.js': 'primary',
        'Vue': 'primary',
        'Angular': 'primary',
        'Flutter': 'primary',
        'SPFX' : 'primary',

        // Languages
        'JavaScript': 'success',
        'TypeScript': 'success',
        'Python': 'success',
        'Dart': 'success',
        'HTML/CSS': 'success',


        // State Management
        'Redux': 'purple',
        'Zustand': 'purple',
        'Context API': 'purple',

        // Build Tools
        'Webpack': 'warning',
        'Babel': 'warning',
        'Vite': 'warning',
        'Expo': 'warning',
        'Gulp' : 'warning',

        // Backend & Databases
        'Node': 'secondary',
        'Express': 'secondary',
        'Django': 'secondary',
        'MongoDB': 'secondary',
        'SQL': 'secondary',
        'Firebase': 'secondary',
        'Microsoft GraphQL': 'secondary',

        // UI Libraries
        'Bootstrap 5': 'info',
        'Material UI': 'info',
        'Tailwind CSS': 'info',
        'PyQt': 'info',

        // DevOps & Tools
        'Git': 'dark',
        'CI/CD': 'dark',
        'Docker': 'dark',
        'Figma' : 'dark',

        // Internationalization
        'i18n': 'warning-subtle',
    };

    return variants[tech] || 'secondary';
};