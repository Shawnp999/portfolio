import blurredBirthdayComponentImage from './BlurredBirthdayComponentSPFX.png';
import blurredSeatingChartImage from './BlurredSeatingChart.png';
import profileComponentImage from './ProfileComponent.jpg';
import userDirectoryScreenBlurImage from './UserDirectoryScreenBlur.png';
import wbInsightsImage from './wbInsightsScreen.png'
import {ProjectImageCollection} from "../../../types/types.ts";



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

export const {
    blurredBirthdayComponent,
    blurredSeatingChart,
    profileComponent,
    userDirectoryScreenBlur,
    consultingSite
} = projectImages;

export default projectImages;