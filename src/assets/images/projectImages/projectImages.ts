
import blurredBirthdayComponentImage from './BlurredBirthdayComponentSPFX.png';
import blurredSeatingChartImage from './BlurredSeatingChart.png';
import profileComponentImage from './ProfileComponent.jpg';
import userDirectoryScreenBlurImage from './UserDirectoryScreenBlur.png';
import wbInsightsImage from './wbInsightsScreen.png'

// Define an interface for image objects
interface ProjectImage {
    src: string;
    alt: string;
    width?: number | string;  // Can be pixels or percentage
    height?: number | string; // Can be pixels or percentage
    aspectRatio?: number;     // For maintaining aspect ratio when using percentages
}

// Define an interface for the image collection
interface ProjectImageCollection {
    [key: string]: ProjectImage;
}

// Create and export the image collection
const projectImages: ProjectImageCollection = {
    blurredBirthdayComponent: {
        src: blurredBirthdayComponentImage,
        alt: 'Blurred Birthday Component',

    },
    blurredSeatingChart: {
        src: blurredSeatingChartImage,
        alt: 'Blurred Seating Chart',

    },
    profileComponent: {
        src: profileComponentImage,
        alt: 'Profile Component',

    },
    userDirectoryScreenBlur: {
        src: userDirectoryScreenBlurImage,
        alt: 'User Directory Screen Blur',

    },
    consultingSite: {
        src: wbInsightsImage,
        alt: 'Consulting Site Image',

    },
};

// Export individual images for destructured imports
export const {
    blurredBirthdayComponent,
    blurredSeatingChart,
    profileComponent,
    userDirectoryScreenBlur,
    consultingSite
} = projectImages;

// Export the entire collection as default
export default projectImages;