import './badgeColors.css'


export const getTechBadgeVariant = (tech: string): string => {

    const categoryMap: Record<string, string> = {

        'React': 'frontend-framework',
        'React Native': 'frontend-framework',
        'Next.js': 'frontend-framework',
        'Gatsby': 'frontend-framework',
        'Vue': 'frontend-framework',
        'Angular': 'frontend-framework',
        'Flutter': 'frontend-framework',
        'SPFX': 'frontend-framework',

        'JavaScript': 'language',
        'TypeScript': 'language',
        'Python': 'language',
        'Dart': 'language',
        'HTML/CSS': 'language',

        'Redux': 'state-management',
        'Zustand': 'state-management',
        'Context API': 'state-management',

        'Webpack': 'build-tool',
        'Babel': 'build-tool',
        'Vite': 'build-tool',
        'Expo': 'build-tool',
        'Gulp': 'build-tool',

        'Node.js': 'backend',
        'Node': 'backend',
        'Express': 'backend',
        'Django': 'backend',
        'MongoDB': 'backend',
        'SQL': 'backend',
        'Firebase': 'backend',
        'Microsoft GraphQL': 'backend',

        'Bootstrap 5': 'ui-library',
        'Material UI': 'ui-library',
        'Tailwind CSS': 'ui-library',
        'PyQt': 'ui-library',

        'Git': 'devops',
        'CI/CD': 'devops',
        'Docker': 'devops',

        'Figma': 'other',
        'i18n': 'other',
        'Web Development': 'other',
    };

    const styleMap: Record<string, string> = {
        'frontend-framework': 'primary',
        'language': 'success',
        'state-management': 'purple',
        'build-tool': 'warning',
        'backend': 'secondary',
        'ui-library': 'info',
        'devops': 'light-red',
        'other': 'light-blue',
        'default': 'secondary'
    };

    const category = categoryMap[tech] || 'default';
    return styleMap[category];
};

export const projectStatus = (status: string): string => {

    const statusKeyMap: Record<string, string> = {
        // keys
        'Planning': 'planning',
        'In Development': 'development',
        'Alpha': 'alpha',
        'Beta Testing': 'beta',
        'Release Candidate': 'rc',
        'Production': 'production',
        'Maintained': 'maintained',
        'Legacy': 'legacy',
        'Deprecated': 'deprecated',
        'Archived': 'archived',

        'Планирование': 'planning',
        'В разработке': 'development',
        'Альфа': 'alpha',
        'Бета-тестирование': 'beta',
        'Релиз-кандидат': 'rc',
        'Продакшн': 'production',
        'На обслуживании': 'maintained',
        'Устаревший': 'legacy',
        'Не поддерживается': 'deprecated',
        'Архивный': 'archived',
    };

    const variantMap: Record<string, string> = {
        'planning': 'secondary',
        'development': 'warning',
        'alpha': 'warning',
        'beta': 'info',
        'rc': 'purple',
        'production': 'success',
        'maintained': 'info',
        'legacy': 'secondary',
        'deprecated': 'danger',
        'archived': 'dark',
    };

    const statusKey = statusKeyMap[status] || 'unknown';
    return variantMap[statusKey] || 'secondary';
};