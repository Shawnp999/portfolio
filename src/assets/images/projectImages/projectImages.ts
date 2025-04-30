import blurredBirthdayComponentImage from './CorrectResBirthdaysSPFCrossed.jpg'
import blurredSeatingChartImage from './SeatingChatSPF.jpeg'
import profileComponentImage from './ProfilePageSPF.jpeg'
import userDirectoryScreenBlurImage from './UserDirectorySPFCrossed.jpg'
import wbInsightsImage from './websmartconsdjang.jpeg'
import Scannsplit from './ScannsplitReactNativ.jpeg'
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
    scannsplit: {
        src: Scannsplit,
        alt: 'Blurred Birthday Component',

    }
};

export const {
    blurredBirthdayComponent,
    blurredSeatingChart,
    profileComponent,
    userDirectoryScreenBlur,
    consultingSite
} = projectImages;

export default projectImages;