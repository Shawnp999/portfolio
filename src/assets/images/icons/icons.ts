import githubIcon from './github-brands.svg';
import linkedinIcon from './linkedin-brands.svg';
import envelopeIcon from './envelope-solid.svg';
import paperPlaneIcon from './paper-plane-solid.svg';

interface IconsCollection {
    [key: string]: string;
}

const icons: IconsCollection = {
    github: githubIcon,
    linkedin: linkedinIcon,
    envelope: envelopeIcon,
    paperPlane: paperPlaneIcon
};

export const {
    github,
    linkedin,
    envelope,
    paperPlane
} = icons;

// Export default icons object
export default icons;