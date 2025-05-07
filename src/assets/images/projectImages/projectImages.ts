import blurredBirthdayComponentImage from './CorrectResBirthdaysSPFCrossed (1).webp'
import blurredSeatingChartImage from './SeatingChatSPF.webp'
import profileComponentImage from './ProfilePageSPF.webp'
import userDirectoryScreenBlurImage from './UserDirectorySPFCrossed.webp'
import wbInsightsImage from './websmartconsdjang.webp'
import Scannsplit from './ScannsplitReactNativ.webp'
import MyPortfolio from './PortfolioScreenshot.webp'
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

    },
    myPortfolio: {
        src: MyPortfolio,
        alt: 'My Portfolio IMG',

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